import Filter from "./options/Filter";
import ButtonAddPod from "../pod/ButtonAddPod";
import NamePlace from "./options/NamePlace";
import Comments from "./options/Comments";
import Coordinates from "./options/Coordinates";
import React from "react";
import {initReactI18next, useTranslation} from "react-i18next";
import Mark from "./options/Mark";
import i18n from "../../i18n";

i18n.use(initReactI18next)

function MarkerPanel() {

    const { t } = useTranslation();
    let user : string[] = []

    function closeMenu() {
        const markersMenu = document.getElementById("markersMenu");
        if (markersMenu !== null) {
            markersMenu.style.width = "0";
        }
    }

    return (
        <div id="markersMenu">
            <h1>{t("add_marker")}</h1>
            <input type="button" className="cross" onClick={closeMenu} value="&times;"/>
            <form>
                <NamePlace title={t("places_name")}/>
                <Coordinates/>
                <Filter titleFilter={t("category")} nameFilter={"edit"} usersWebId={user}/>
                <Mark title={t("mark")}/>
                <Comments title={t("comment")}/>
                <ButtonAddPod idName={"namePlace"} idCategory={"categoryMarker"} idComment={"comment"} idScore={"scoreNewMarker"}
                              idLatitude={"latitude"} idLongitude={"longitude"}/>
            </form>
        </div>
    )

}

export default MarkerPanel;