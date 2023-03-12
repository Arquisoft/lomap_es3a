import {CommentType} from "../../../shared/shareddtypes";

function Comments({title}: CommentType) {
    return (
        <div>
            <h2>{title}</h2>
            <textarea id="comment" placeholder="Add any description about this place..."></textarea>
        </div>
    )
}

export default Comments