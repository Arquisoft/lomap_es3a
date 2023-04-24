import {CommentType} from "../../../shared/shareddtypes";
import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../../i18n";

i18n.use(initReactI18next)

function Comments({title}: CommentType) {

    const {t} = useTranslation();

    return (
        <div>
            <h2>{title}</h2>
            <textarea id="comment" placeholder={t("descriptionPlaceholder") ?? ""}></textarea>
        </div>
    )
}

export default Comments