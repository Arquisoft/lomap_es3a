import React from "react";
import {useTranslation} from "react-i18next";

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