import i18n from "../../i18n";
import {initReactI18next, useTranslation} from "react-i18next";
import React from "react";
import {Carousel} from "react-bootstrap";
import Kremlin from "../../img/Kremlin.png";
import {Point} from "../pod/Point";
import Rating from "@mui/material/Rating";
import Mark from "./options/Mark";
import {v4 as uuidv4} from "uuid";

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

    return (
        <div id="showMarkerPanel">
            <input type="button" className="cross" onClick={closeMenu} value="&times;"/>
            <div id="profileMarkerAuthor">
                <img
                    src="https://avatars.githubusercontent.com/u/91057639?v=4"
                    className="rounded-circle"
                    alt="Avatar"
                    width="72"
                    height="72"
                />
                <div id="profileMarkerData">
                    <h3>{props.data.author.slice(8,-27)}</h3>
                    <h4>{new Date(props.data.dateCreated).toLocaleDateString(sessionStorage.getItem("language") || "en")}</h4>
                </div>
            </div>
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
                <Carousel.Item>
                    <img
                        src={Kremlin}
                        alt="Kremlin"
                    />
                </Carousel.Item>
            </Carousel>
            <div id="markerData">
                <h3>{props.data.name}</h3>
                <div id="showMarkerScore">
                    <p id="totalReviews">
                        ({props.data.review.length})
                    </p>
                    <Rating
                        name="size-medium"
                        value={props.data.review.reduce((sum, reviewItem) => sum+ reviewItem.reviewRating, 0) / props.data.review.length}
                        precision={1}
                        readOnly
                    />
                    <p id="totalScore">
                        {props.data.review.length}
                    </p>
                </div>
                <p id="showMarkerCategory">
                    {t(props.data.category)}
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
                                    <img
                                        src={reviewItem.author}
                                        className="rounded-circle"
                                        alt="Avatar"
                                        width="36"
                                        height="36"
                                    />
                                    <div id="nameAndDate">
                                        <h5>@{reviewItem.author.slice(8,-27)}</h5>
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
