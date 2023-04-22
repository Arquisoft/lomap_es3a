import "../../css/footer.css";
import {initReactI18next, useTranslation} from 'react-i18next';
import i18n from "../../i18n";

i18n.use(initReactI18next)

function FooterInfo() {
    const {t} = useTranslation();

    return (
        <footer id="info">
            <a id="link" href="https://arquisoft.github.io/">
                {t("footer")}
            </a>
        </footer>
    )
}

export default FooterInfo