import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../../i18n";

i18n.use(initReactI18next)

function Coordinates() {
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t("latitude")}</h2>
            <input type="text" id="latitude" readOnly={true}/>
            <h2>{t("longitude")}</h2>
            <input type="text" id="longitude" readOnly={true}/>
        </div>
    )
}

export default Coordinates