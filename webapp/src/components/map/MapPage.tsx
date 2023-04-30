import "../../css/map.css";
import React, {useState} from "react";
import OptionsPanel from "./OptionsPanel";
import AddMarkerPanel from "./AddMarkerPanel";
import MapView from "./MapView";
import ShowMarkerPanel from "./ShowMarkerPanel";
import {Point} from "../pod/Point";

function MapPage() {
    const [item, setItem] = useState<Point>();

    return (
        <div id="mapPage">
            <OptionsPanel setItem={setItem}/>
            <div id="mapView">
                <MapView lat={43.3548057} lng={-5.8534646} webId={[]} setItem={setItem}/>
            </div>
            <AddMarkerPanel setItem={setItem}/>
            <ShowMarkerPanel data={item} setItem={setItem}/>
        </div>
    )
}

export default MapPage