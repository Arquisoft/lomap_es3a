import i18n from "../../i18n";
import {initReactI18next, useTranslation} from "react-i18next";
import React, {useState} from "react";
import {Carousel} from "react-bootstrap";
import {Point} from "../pod/Point";
import Rating from "@mui/material/Rating";
import Mark from "./options/Mark";
import {v4 as uuidv4} from "uuid";
import {CombinedDataProvider, Image, Text, useSession} from "@inrupt/solid-ui-react";
import {Avatar, Button, Container} from "@mui/material";
import {FOAF, VCARD} from "@inrupt/lit-generated-vocab-common";
import profilePhoto from "../../img/profile.png";
import MapView from "./MapView";
import ReactDOM from "react-dom/client";
import {uploadComment, uploadImage} from "../pod/PODsInteraction";
import Notification from "../Notification";
import Icon from "../../img/symbols/GOMapSymbol.png";
import ImgbbUploader from "./ImgbbUploader";

i18n.use(initReactI18next)

function ShowMarkerPanel(props: { data: Point | undefined, setItem: Function }) {
    const {session} = useSession();
    const {t} = useTranslation();
    const [showNotification, setShowNotification] = useState(false);
    const [errorComment, setErrorComment] = useState(false);
    const [errorImage, setErrorImage] = useState(false);
    const [imageUploadUrl, setImageUploadUrl] = useState("");

    function createNotification() {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 4000);
    }

    const handleCloseNotification = () => {
        setShowNotification(false);
        setErrorComment(false);
        setErrorImage(false);
    };

    function removeContent() {
        (document.getElementById("reviewComment") as HTMLInputElement).value = "";
        let score = (document.getElementById("reviewScore") as HTMLInputElement).textContent;
        (document.getElementsByClassName("MuiRating-visuallyHidden")[Number(score)] as HTMLInputElement).click();
    }

    function getRoute() {
        return props.data?.author !== undefined ? props.data?.author.split("/").slice(0, 3).join("/").concat("/lomap/" + props.data?.mapName + ".jsonld") :
            (document.getElementById("selectMap") as HTMLSelectElement).value;
    }

    function renderMap() {
        const root = ReactDOM.createRoot(document.getElementById("mapView") as HTMLElement);
        root.render(<MapView lat={Number(props.data?.latitude)}
                             lng={Number(props.data?.longitude)}
                             setItem={props.setItem}
                             webId={[getRoute()]}/>);
    }

    function handleClick(): void {
        uploadComment(getRoute(), props.data, props.data?.mapName + ".jsonld", session).then((result) => {
            createNotification();
            if (result) {
                closeMenu();
                removeContent();
                renderMap();
            } else {
                setErrorComment(true);
            }
        })
    }

    function handleClickImage(): void {
        uploadImage(getRoute(), props.data, props.data?.mapName + ".jsonld", imageUploadUrl, session).then((result) => {
            if (result) {
                closeMenu();
                removeContent();
                renderMap();
            } else {
                setErrorImage(true);
            }
        })
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
            return Number((total / reviews.length).toFixed(1));
        }
        return 0;
    }

    const dropdownTitle = (
        <span>
            <CombinedDataProvider datasetUrl={props.data.author} thingUrl={props.data.author}>
                <Text property={FOAF.name.iri.value} autosave/>
            </CombinedDataProvider>
        </span>
    );

    function handleUploadSuccessImage(imageUrl: string) {
        setImageUploadUrl(imageUrl);
    }

    function handleUploadFailureImage(error: Error) {
        console.error(error);
    }

    return (
        <div id="showMarkerPanel">
            <input type="button" className="cross" onClick={closeMenu} value="&times;"/>
            <div id="profileMarkerAuthor">
                <CombinedDataProvider datasetUrl={props.data.author} thingUrl={props.data.author}>
                    <Avatar
                        alt="Profile picture"
                        sx={{width: 65, height: 65, mb: 2, margin: 0}}>
                        {
                            VCARD.hasPhoto.iri.value !== '' &&
                            <Image property={VCARD.hasPhoto.iri.value} width={65}/>
                        }
                        {
                            VCARD.hasPhoto.iri.value === '' &&
                            <img src={profilePhoto} width={65} alt={props.data.author}/>
                        }
                    </Avatar>
                </CombinedDataProvider>
                <div id="profileMarkerData">
                    <h3>{dropdownTitle}</h3>
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
                    <div id="image-upload-container">
                        <div id="container_upload">
                            <ImgbbUploader
                                apiKey="7e17d052e1f665b83d3addfe291f8047"
                                onUploadSuccess={handleUploadSuccessImage}
                                onUploadFailure={handleUploadFailureImage}
                                buttonId={"uploadMarkerButton"}
                            />
                            <Container id="imgContainer">
                                {imageUploadUrl && <img src={imageUploadUrl} alt="Uploaded" width="100%" height="100%"
                                                        id="upload_image"/>}
                            </Container>
                            <Button variant="contained" color="primary" onClick={handleClickImage}>
                                {t("confirm")}
                            </Button>
                        </div>
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
            {
                showNotification &&
                (
                    <Notification
                        title={t("notificationCommentAdded")}
                        message={t("notificationMessageComment")}
                        time={t("notificationTime")}
                        icon={Icon}
                        onClose={handleCloseNotification}
                    />
                )
            }
            {
                errorComment &&
                (
                    <Notification
                        title={t("notificationCommentError")}
                        message={t("notificationCommentErrorMessage")}
                        time={t("notificationTime")}
                        icon={Icon}
                        onClose={handleCloseNotification}
                    />
                )
            }
            {
                errorImage &&
                (
                    <Notification
                        title={t("notificationImageError")}
                        message={t("notificationImageErrorMessage")}
                        time={t("notificationTime")}
                        icon={Icon}
                        onClose={handleCloseNotification}
                    />
                )
            }
        </div>
    )
}

export default ShowMarkerPanel;
