import Filter from "./options/Filter";
import ButtonAddPod from "../pod/ButtonAddPod";
import NamePlace from "./options/NamePlace";
import Comments from "./options/Comments";
import Score from "./options/Score";
import Coordinates from "./options/Coordinates";
import Notification from "./Notification";
import React from "react";

function MarkerPanel() {

    return (
        <div id="markersMenu">
            <h1>Add Marker</h1>
            <NamePlace title={"Enter place's name:"}/>
            <Coordinates/>
            <Filter title={"Marker's Category:"}
                    options={["Bar", "Shop", "Restaurant", "Cinema", "Landscape", "Monument"]}/>
            <Comments title={"Put a comment about this place"}/>
            <Score title={"Select the score you would give this place"}/>
            <ButtonAddPod idName={"namePlace"} idCategory={"category"} idComment={"comment"} idScore={"score"} idLatitude={"latitude"} idLongitude={"longitude"}/>


        </div>
    )

}

export default MarkerPanel;