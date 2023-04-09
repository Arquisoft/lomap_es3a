import {useTranslation} from "react-i18next";

function DocumentationButton() {

    const { t } = useTranslation();

    return (
        <a href="https://arquisoft.github.io/lomap_es3a/" id="documentButton">
            {t("docs_button")}
        </a>
    )

}

export default DocumentationButton;