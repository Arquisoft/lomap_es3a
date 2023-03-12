import "../../css/map.css"
import Map from "./Map"
import FooterInfo from "../FooterInfo";
import OptionsPanel from "./options/OptionsPanel";
import MarkerPanel from "./MarkerPanel";

function MapScreen() {
    return (
        <div>
            <OptionsPanel />
            <MarkerPanel/>
            <div id="screen">
                <Map />
            </div>
            <FooterInfo />
        </div>
    )
}

export default MapScreen