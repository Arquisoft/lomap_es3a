import "../../css/map.css";
import React from "react";
import OptionsPanel from "./OptionsPanel";
import MarkerPanel from "./MarkerPanel";
import MapView from "./MapView";
import {useSession} from "@inrupt/solid-ui-react";

function MapPage() {
    const {session} = useSession();
    const {webId} = session.info;
    let webIdStore = webId?.slice(0, -15) + 'private/locations.jsonld';
    let user : string[] = [webIdStore]

    return (
        <div id="mapPage">
            <OptionsPanel/>
            <div id="mapView">
                <MapView lat={43.3548057} lng={-5.8534646} webId={user}/>
            </div>
            <MarkerPanel/>
        </div>
    )
}

export default MapPage