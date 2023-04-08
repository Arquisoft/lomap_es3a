import {useTranslation} from "react-i18next";

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