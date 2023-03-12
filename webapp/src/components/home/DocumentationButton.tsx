import {DocumentationButtonType} from "../../shared/shareddtypes";

function DocumentationButton({href, text}: DocumentationButtonType) {
    return (
        <a href={href} id="documentButton">
            {text}
        </a>
    )

}

export default DocumentationButton;