import {CommentType} from "../../../shared/shareddtypes";

function Comments({title}:CommentType){
    return(
        <div>
            <h2>{title}</h2>
            <textarea id="comment"></textarea>
        </div>
    )
}
export default Comments