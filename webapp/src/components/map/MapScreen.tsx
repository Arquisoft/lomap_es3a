import "../../css/map.css"
import Map from "./Map"
import FooterInfo from "../FooterInfo";
import OptionsButton from "./OptionsButton";
import OptionsPanel from "./options/OptionsPanel";
function MapScreen() {
    return (
        <div>
            {/*<OptionsButton />*/}
            <OptionsPanel />
            <div id="screen">
                <Map />
            </div>
            <FooterInfo />
        </div>
    )
}

export default MapScreen