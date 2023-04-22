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

function AddMarkerPanel(props: { setItem: Function }) {

    const {t} = useTranslation();

    let user: string[] = [];

    function closeMenu() {
        const addMarkerPanel = document.getElementById("addMarkerPanel");
        if (addMarkerPanel !== null) {
            addMarkerPanel.style.width = "0";
        }
    }

    return (
        <div id="addMarkerPanel">
            <h1>{t("addMarker")}</h1>
            <input type="button" className="cross" onClick={closeMenu} value="&times;"/>
            <form>
                <NamePlace title={t("placesName")}/>
                <Coordinates/>
                <Filter titleFilter={t("category")} nameFilter={"edit"} usersWebId={user} setItem={props.setItem}/>
                <Mark title={t("mark")} id={"scoreNewMarker"}/>
                <Comments title={t("comment")}/>
                <ButtonAddPod idName={"namePlace"} idCategory={"categoryMarker"} idComment={"comment"}
                              idScore={"scoreNewMarker"}
                              idLatitude={"latitude"} idLongitude={"longitude"} setItem={props.setItem}/>
            </form>
        </div>
    )

}

export default AddMarkerPanel;