import Filter from "./options/Filter";
import ButtonAddPod from "../pod/ButtonAddPod";
import NamePlace from "./options/NamePlace";
import Comments from "./options/Comments";
import Score from "./options/Score";

function MarkerPanel() {

    return (
        <div id="markersMenu">
            <h1>Add Marker</h1>
            <NamePlace title={"Enter place's name:"}/>
            <Filter title={"Marker's Category:"}
                    options={["Bar", "Shop", "Restaurant", "Cinema", "Landscape", "Monument"]}/>
            <Comments title={"Put a comment about this place"}/>
            <Score title={"Select the score you would give this place"}/>
            <ButtonAddPod idName={"namePlace"} idCategory={"category"} idComment={"comment"} idScore={"score"}/>
        </div>
    )

}

export default MarkerPanel;