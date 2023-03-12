import "../../css/map.css"
import Map from "./Map"
import FooterInfo from "../FooterInfo";
import OptionsPanel from "./options/OptionsPanel";

function MapScreen() {
    return (
        <div>
            <OptionsPanel />
            <div id="screen">
                <Map />
            </div>
            <FooterInfo />
        </div>
    )
}

export default MapScreen