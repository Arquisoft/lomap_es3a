import React from "react";
import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../i18n";

i18n.use(initReactI18next)

function DescriptionText() {

    const { t } = useTranslation();

    return (
        <div id="documentation">
            <p>
                {t("home_info1")}
            </p>
            <p>
                {t("home_info2")}
            </p>
        </div>
    );
}

export default DescriptionText