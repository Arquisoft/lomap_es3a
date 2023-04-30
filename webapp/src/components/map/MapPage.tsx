import "../../css/map.css";
import React, {useState} from "react";
import OptionsPanel from "./OptionsPanel";
import AddMarkerPanel from "./AddMarkerPanel";
import MapView from "./MapView";
import {useSession} from "@inrupt/solid-ui-react";
import ShowMarkerPanel from "./ShowMarkerPanel";
import {Point} from "../pod/Point";

function MapPage() {
    const [item, setItem] = useState<Point>();
    const {session} = useSession();
    const {webId} = session.info;
    let webIdStore = webId?.slice(0, -15) + 'private/locations.jsonld';
    let user: string[] = [webIdStore]

    return (
        <div id="mapPage">
            <OptionsPanel setItem={setItem}/>
            <div id="mapView">
                <MapView lat={43.3548057} lng={-5.8534646} webId={user} setItem={setItem}/>
            </div>
            <AddMarkerPanel setItem={setItem}/>
            <ShowMarkerPanel data={item} setItem={setItem}/>
        </div>
    )
}

export default MapPage