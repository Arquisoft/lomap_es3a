import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../i18n";

i18n.use(initReactI18next)

function DocumentationButton() {

    const { t } = useTranslation();

    return (
        <a href="https://arquisoft.github.io/lomap_es3a/" id="documentButton">
            {t("docsButton")}
        </a>
    )

}

export default DocumentationButton;