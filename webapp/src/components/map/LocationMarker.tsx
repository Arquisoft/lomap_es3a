import {Marker, Popup, useMapEvents} from 'react-leaflet';
import "../../css/react-leaflet.css";
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import {useState} from "react";

function LocationMarker() {
    const [position, setPosition] = useState({lat: 43.364864, lng: -5.862134})
    const map = useMapEvents({
        click(e) {
            setPosition(e.latlng);
            (document.getElementById("markersMenu") as HTMLDivElement).style.visibility = "visible";
        }

    })

    return (
        <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>
                Your are choosing this point
            </Popup>
        </Marker>
    )
}

export default LocationMarker;