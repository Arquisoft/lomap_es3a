import "../../css/map.css"
import MapView from "./MapView"
import OptionsPanel from "./options/OptionsPanel";
import MarkerPanel from "./MarkerPanel";

function MapScreen() {
    return (
        <div id="map">
            <OptionsPanel/>
            <MarkerPanel/>
            <div id="screen">
                <MapView lat={43.3548057} lng={-5.8534646}/>
            </div>
        </div>
    )
}

export default MapScreen