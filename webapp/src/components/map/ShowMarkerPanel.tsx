import i18n from "../../i18n";
import {initReactI18next, useTranslation} from "react-i18next";
import React from "react";
import {Carousel} from "react-bootstrap";
import {Point} from "../pod/Point";
import Rating from "@mui/material/Rating";
import Mark from "./options/Mark";
import {v4 as uuidv4} from "uuid";
import {CombinedDataProvider, Image, useSession} from "@inrupt/solid-ui-react";
import {Avatar} from "@mui/material";
import {VCARD} from "@inrupt/lit-generated-vocab-common";
import {Session} from "@inrupt/solid-client-authn-browser";
import {readFileFromPod, createData} from "../pod/Utils";
import MapView from "./MapView";
import ReactDOM from "react-dom/client";

i18n.use(initReactI18next)

function ShowMarkerPanel(props: { data: Point | undefined, setItem: Function }) {
    const {session} = useSession();
    const {webId} = session.info;
    const webIdStore = webId?.slice(0, -15) + "private/locations.jsonld";
    const user: string[] = [webIdStore]
    const {t} = useTranslation();
    const nameFile = "locations.jsonld";

    const fileURL = webId?.slice(0, -15) + "private/" + nameFile;

    function uploadComment(fileURL: string, session: Session) {
        let score = (document.getElementById("reviewScore") as HTMLInputElement).textContent;
        console.log(score)
        let comment = (document.getElementById("reviewComment") as HTMLInputElement).value;
        readFileFromPod(fileURL, session).then(fileContent => {
                let fileJSON = JSON.parse(fileContent);
                for (const element of fileJSON) {
                    if (element.identifier === props.data?.id) {
                        element.review.push(
                            {
                                "@type": "Review",
                                "author": {
                                    "@type": "Person",
                                    "identifier": webId
                                },
                                "reviewRating": {
                                    "@type": "Rating",
                                    "ratingValue": score
                                },
                                "datePublished": new Date().valueOf(),
                                "reviewBody": comment
                            }
                        );
                    }
                }
                let blob = new Blob([JSON.stringify(fileJSON, null, 3)], {
                    type: "application/ld+json",
                });
                createData(fileURL, new File([blob], nameFile, {type: blob.type}), session).then(() => {
                    closeMenu();
                    const root = ReactDOM.createRoot(document.getElementById("mapView") as HTMLElement);
                    root.render(<MapView lat={Number(props.data?.latitude)}
                                             lng={Number(props.data?.longitude)}
                                             setItem={props.setItem}
                                             webId={user}/>);
                });
            }
        );

    }

    function handleClick(): void {
        uploadComment(fileURL, session);
    }

    function closeMenu() {
        const showMarkerPanel = document.getElementById("showMarkerPanel");
        if (showMarkerPanel !== null) {
            showMarkerPanel.style.width = "0";
        }
    }

    if (!props.data) {
        return null
    }

    function calculateTotal(): number {
        let total = 0;
        const reviews = props.data?.review;
        if (reviews) {
            if (reviews.length === 0) {
                return 0;
            }
            for (const element of reviews) {
                total += Number(element.reviewRating);
            }
            return Number(total / reviews.length);
        }
        return 0;
    }

    return (
        <div id="showMarkerPanel">
            <input type="button" className="cross" onClick={closeMenu} value="&times;"/>
            <div id="profileMarkerAuthor">
                <CombinedDataProvider datasetUrl={props.data.author} thingUrl={props.data.author}>
                    <Avatar
                        alt="Profile picture"
                        sx={{width: 65, height: 65, mb: 2, margin: 0}}
                    >
                        <Image property={VCARD.hasPhoto.iri.value} width={65}/>
                    </Avatar>
                </CombinedDataProvider>
                <div id="profileMarkerData">
                    <h3>{props.data.author.slice(8, -27).toLocaleUpperCase(sessionStorage.getItem("language") || "en")}</h3>
                    <h4>{new Date(props.data.dateCreated).toLocaleDateString(sessionStorage.getItem("language") || "en")}</h4>
                </div>
            </div>
            {(props.data.image.length > 0) ?
                <Carousel defaultActiveIndex={0}>
                    {
                        props.data.image.map((image) => (
                            <Carousel.Item key={uuidv4()}>
                                <img
                                    src={image.contentUrl}
                                    alt={image.author}
                                />
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
                :
                <p className="no-content">{t("noImages")}</p>
            }
            <div id="markerData">
                <h3>{props.data.name}</h3>
                <div id="showMarkerScore">
                    <p id="totalReviews">
                        ({props.data.review.length})
                    </p>
                    <Rating
                        name="size-medium"
                        value={calculateTotal()}
                        precision={1}
                        readOnly
                    />
                    <p id="totalScore">
                        {calculateTotal()}
                    </p>
                </div>
                <p id="showMarkerCategory">
                    {t(props.data.category)}
                </p>
                <p id="showMarkerDescription">
                    {t(props.data.description)}
                </p>
                <p id="showMarkerCoords">
                    {props.data.latitude}, {props.data.longitude}
                </p>
                <div id="reviews">
                    <h4 id="reviewsTitle">{t("reviews")}</h4>
                    <div id="addReview">
                        <Mark title={""} id={"reviewScore"}/>
                        <textarea id="reviewComment" placeholder={t("addReview") ?? ""}/>
                        <button id="reviewButton" onClick={handleClick}>{t("add")}</button>
                    </div>
                    {
                        props.data.review.map((reviewItem) => (
                            <div className="review" key={uuidv4()}>
                                <div className="profileReview">
                                    <CombinedDataProvider datasetUrl={reviewItem.author} thingUrl={reviewItem.author}>
                                        <Avatar
                                            alt="Profile picture"
                                            sx={{width: 65, height: 65, mb: 2, margin: 0}}
                                        >
                                            <Image property={VCARD.hasPhoto.iri.value} width={65}/>
                                        </Avatar>
                                    </CombinedDataProvider>
                                    <div id="nameAndDate">
                                        <h5>@{reviewItem.author.slice(8, -27)}</h5>
                                        <p>{new Date(reviewItem.datePublished).toLocaleDateString(sessionStorage.getItem("language") || "en")}</p>
                                    </div>
                                </div>
                                <div id="ratingReview">
                                    <Rating
                                        name="size-medium"
                                        value={reviewItem.reviewRating}
                                        precision={1}
                                        readOnly
                                    />
                                    <p id="ratingScore">
                                        {reviewItem.reviewRating}
                                    </p>
                                </div>
                                <p>{reviewItem.comment}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ShowMarkerPanel;
