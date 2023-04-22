import {NamePlaceType} from "../../../shared/shareddtypes";
import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../../i18n";

i18n.use(initReactI18next)

function NamePlace({title}: NamePlaceType) {
    const {t} = useTranslation();

    return (
        <div>
            <h2>{title}</h2>
            <input type="text" id="namePlace" placeholder={t("placesNamePlaceholder") ?? ""} required/>
        </div>
    )

}

export default NamePlace