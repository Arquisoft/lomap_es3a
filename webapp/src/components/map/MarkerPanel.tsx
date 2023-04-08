import Filter from "./options/Filter";
import ButtonAddPod from "../pod/ButtonAddPod";
import NamePlace from "./options/NamePlace";
import Comments from "./options/Comments";
import Coordinates from "./options/Coordinates";
import React from "react";
import {useTranslation} from "react-i18next";
import Score from "./options/Score";

function MarkerPanel() {

    const { t } = useTranslation();

    const categories = {
        bars: t('bars'),
        restaurants: t('restaurants'),
        shops: t('shops'),
        supermarkets: t('supermarkets'),
        hotels: t('hotels'),
        cinemas: t('cinemas'),
        academic_institution: t('academic_institution'),
        public_institution: t('public_institution'),
        sports_club: t('sports_club'),
        museum: t('museum'),
        parks: t('parks'),
        others: t('others'),
    };

    function closeMenu() {
        const markersMenu = document.getElementById("markersMenu");
        if (markersMenu !== null) {
            markersMenu.style.width = "0";
        }
    }

    return (
        <div id="markersMenu">
            <h1>{t("add_marker")}</h1>
            <a href="javascript:void(0)" className="cross" onClick={closeMenu}>&times;</a>
            <form>
                <NamePlace title={t("places_name")}/>
                <Coordinates/>
                <Filter title={t("category")}/>
                <Score title={t("mark")}/>
                <Comments title={t("comment")}/>
                <ButtonAddPod idName={"namePlace"} idCategory={"category"} idComment={"comment"} idScore={"score"}
                              idLatitude={"latitude"} idLongitude={"longitude"}/>
            </form>
        </div>
    )

}

export default MarkerPanel;