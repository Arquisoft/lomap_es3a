import {initReactI18next, useTranslation} from "react-i18next";
import {SearchType} from "../../../shared/shareddtypes";
import i18n from "../../../i18n";

i18n.use(initReactI18next)

function Search({title} : SearchType) {

    const { t } = useTranslation();

    function searchMarker() {
        /*TODO*/
        console.log("TODO")
    }

    return (
        <div>
            <h2>{title}</h2>
            <div id="searchPanel">
                <input type="text" id="searchText" placeholder={t("search_placeholder") ?? ""}/>
                <input type="button" id="searchButton" value="🔍" onClick={searchMarker}/>
            </div>
        </div>
    )
}

export default Search