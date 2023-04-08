import {CommentType} from "../../../shared/shareddtypes";
import {useTranslation} from "react-i18next";

function Comments({title}: CommentType) {

    const { t } = useTranslation();

    return (
        <div>
            <h2>{title}</h2>
            <textarea id="comment" placeholder={t("comment_placeholder") ?? ""}></textarea>
        </div>
    )
}

export default Comments