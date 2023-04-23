import i18n from "../../../i18n";
import {initReactI18next, useTranslation} from "react-i18next";

i18n.use(initReactI18next)

function MapSelector() {
    const {t} = useTranslation();

    function updateMap() {
        /*TODO*/
    }

    return (
        <div>
            <div>
                <h2>{t("mapSelector")}</h2>
                <select onChange={updateMap}>
                    <option value="Map1">Map1</option>
                    <option value="Map2">Map2</option>
                    <option value="Map3">Map3</option>
                </select>
            </div>
            <div>
                <h2>{t("createNewMap")}</h2>
                <div id="newMapButtonPanel">
                    <input type="text" id="newMapTitle" placeholder={t("placesNamePlaceholder") ?? ""}/>
                    <button id="createButton">{t("create")}</button>
                </div>
            </div>
        </div>
    );
}

export default MapSelector;