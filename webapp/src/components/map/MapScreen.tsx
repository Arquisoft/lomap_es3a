import "../../css/map.css"
import Map from "./Map"
import FooterInfo from "../FooterInfo";
import OptionsButton from "./OptionsButton";
function MapScreen() {
    return (
        <div>
            <OptionsButton />
            <div id="screen">
                <Map />
            </div>
            <FooterInfo />
        </div>
    )
}

export default MapScreen