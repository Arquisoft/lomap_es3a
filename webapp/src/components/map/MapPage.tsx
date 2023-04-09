import "../../css/map.css";
import React from "react";
import OptionsPanel from "./OptionsPanel";
import MarkerPanel from "./MarkerPanel";
import MapView from "./MapView";
import FooterInfo from "../FooterInfo";

function MapPage() {
    return (
        <div id="mapPage">
            <OptionsPanel/>
            <div id="mapView">
                <MapView lat={43.3548057} lng={-5.8534646}/>
            </div>
            <MarkerPanel/>
            <FooterInfo/>
        </div>
    )
}

export default MapPage