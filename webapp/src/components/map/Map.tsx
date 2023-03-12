import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import "../../css/react-leaflet.css";
import 'leaflet/dist/leaflet.css';
import LocationMarker from "./LocationMarker";

function Map() {
    const position = {lat: 43.3548057, lng: -5.8534646}

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={true} zoomControl={false} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker/>
        </MapContainer>
    );
}

export default Map