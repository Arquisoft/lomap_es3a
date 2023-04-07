import {NamePlaceType} from "../../../shared/shareddtypes";
import {useTranslation} from "react-i18next";

function NamePlace({title}: NamePlaceType) {
    const { t } = useTranslation();

    return (
        <div>
            <h2>{title}</h2>
            <input type="text" id="namePlace" placeholder={t("places_name_placeholder") ?? ""}/>
        </div>
    )

}

export default NamePlace