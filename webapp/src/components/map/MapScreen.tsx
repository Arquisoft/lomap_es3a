import "../../css/map.css"
import Map from "./Map"
import FooterInfo from "../FooterInfo";
import OptionsPanel from "./options/OptionsPanel";
import MarkerPanel from "./MarkerPanel";

function MapScreen() {
    return (
        <div id="map">
            <OptionsPanel/>
            <MarkerPanel/>
            <div id="screen">
                <Map lat={43.3548057} lng={-5.8534646}/>
            </div>
            <FooterInfo/>
        </div>
    )
}

export default MapScreen