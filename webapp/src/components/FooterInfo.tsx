import "../css/footer.css";
import {useTranslation} from 'react-i18next';

function FooterInfo() {
    const { t } = useTranslation();

    return (
        <footer id="info">
            <a id="link" href="https://arquisoft.github.io/">
                {t("footer")}
            </a>
        </footer>
    )
}

export default FooterInfo