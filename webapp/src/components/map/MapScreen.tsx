import "../../css/map.css"
import MapView from "./MapView"
import FooterInfo from "../FooterInfo";
import OptionsPanel from "./options/OptionsPanel";
import MarkerPanel from "./MarkerPanel";

function MapScreen() {
    return (
        <div>
            <OptionsPanel/>
            <MarkerPanel/>
            <div id="screen">
                <MapView/>
            </div>
            <FooterInfo/>
        </div>
    )
}

export default MapScreen