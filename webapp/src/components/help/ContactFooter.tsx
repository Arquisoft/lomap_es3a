import BlueMarker from "../../img/help/BlueMarker.png";
import BluePhone from "../../img/help/BluePhone.png";
import BlueFax from "../../img/help/BlueFax.png";
import BlueEmail from "../../img/help/BlueEmail.png";
import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../i18n";

i18n.use(initReactI18next)

function ContactFooter() {

    const { t } = useTranslation()

    return (
        <footer id="contactFooter">
            <div className="contactMedia">
                <img src={BlueMarker} alt={"Blue marker"}/>
                <h3>{t("panelOffice")}</h3>
                <p>Calle Valdés Salas, 11, 33007 Oviedo, Asturias</p>
            </div>
            <div className="contactMedia">
                <img src={BluePhone} alt={"Blue phone"}/>
                <h3>{t("panelPhone")}</h3>
                <p>+34 985 10 27 96</p>
            </div>
            <div className="contactMedia">
                <img src={BlueFax} alt={"Blue fax"}/>
                <h3>{t("panelFax")}</h3>
                <p>+1-555-123-4567</p>
            </div>
            <div className="contactMedia">
                <img src={BlueEmail} alt={"Blue email"}/>
                <h3>{t("panelEmail")}</h3>
                <p><a href="mailto:support@lomapes3a.com">support@lomapes3a.com</a></p>
            </div>
        </footer>
    )
}

export default ContactFooter;