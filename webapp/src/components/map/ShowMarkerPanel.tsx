import i18n from "../../i18n";
import {initReactI18next, useTranslation} from "react-i18next";
import React from "react";
import {Carousel} from "react-bootstrap";
import {Point} from "../pod/Point";
import Rating from "@mui/material/Rating";
import Mark from "./options/Mark";
import {v4 as uuidv4} from "uuid";
import {CombinedDataProvider, Image} from "@inrupt/solid-ui-react";
import {Avatar} from "@mui/material";
import {VCARD} from "@inrupt/lit-generated-vocab-common";

i18n.use(initReactI18next)

function ShowMarkerPanel(props: { data: Point | undefined }) {

    const {t} = useTranslation();

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
                total += element.reviewRating;
            }
            return total / reviews.length;
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
                        sx={{ width: 65, height: 65, mb: 2, margin: 0 }}
                    >
                        <Image property={VCARD.hasPhoto.iri.value} width={65} />
                    </Avatar>
                </CombinedDataProvider>
                <div id="profileMarkerData">
                    <h3>{props.data.author.slice(8, -27)}</h3>
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
                <p id="no-image">{t("noImages")}</p>
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
                        <button id="reviewButton">{t("add")}</button>
                    </div>
                    {
                        props.data.review.map((reviewItem) => (
                            <div className="review" key={reviewItem.author}>
                                <div className="profileReview">
                                    <CombinedDataProvider datasetUrl={reviewItem.author} thingUrl={reviewItem.author}>
                                        <Avatar
                                            alt="Profile picture"
                                            sx={{ width: 65, height: 65, mb: 2, margin: 0 }}
                                        >
                                            <Image property={VCARD.hasPhoto.iri.value} width={65} />
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
