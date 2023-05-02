import Filter from "./options/Filter";
import ButtonAddPod from "./ButtonAddPod";
import React from "react";
import {initReactI18next, useTranslation} from "react-i18next";
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
                <div>
                    <h2>{t("placesName")}</h2>
                    <input type="text" id="namePlace" placeholder={t("placesNamePlaceholder") ?? ""} required/>
                </div>
                <div>
                    <h2 hidden={true}>{t("latitude")}</h2>
                    <input type="text" id="latitude" readOnly={true} hidden={true}/>
                    <h2 hidden={true}>{t("longitude")}</h2>
                    <input type="text" id="longitude" readOnly={true} hidden={true}/>
                </div>
                <Filter  nameFilter={"edit"} usersWebId={user} setItem={props.setItem}/>
                <div>
                    <h2>{t("description")}</h2>
                    <textarea id="comment" placeholder={t("descriptionPlaceholder") ?? ""}></textarea>
                </div>
                <div id="addMarkerToPODButton">
                    <ButtonAddPod idName={"namePlace"} idCategory={"categoryMarker"} idComment={"comment"}
                                  idScore={"scoreNewMarker"}
                                  idLatitude={"latitude"} idLongitude={"longitude"} setItem={props.setItem}/>
                </div>
            </form>
        </div>
    )

}

export default AddMarkerPanel;