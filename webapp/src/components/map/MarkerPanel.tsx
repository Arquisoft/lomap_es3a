import Filter from "./options/Filter";
import ButtonAddPod from "../pod/ButtonAddPod";
import NamePlace from "./options/NamePlace";
import Comments from "./options/Comments";
import Score from "./options/Score";

function MarkerPanel() {

    return (
        <div id="markersMenu">
            <NamePlace title={"Enter the name of the place"}/>
            <Filter title={"Select the category of the marker:"}
                    options={["Bar", "Shop", "Restaurant", "Cinema", "Landscape", "Monument"]}/>
            <Comments title={"Put a comment about this place"}/>
            <Score title={"Select the score you would give this place"}/>
            <ButtonAddPod idName={"namePlace"} idCategory={"category"} idComment={"comment"} idScore={"score"}/>
        </div>
    )

}

export default MarkerPanel;