import {Marker, Popup, useMapEvents} from 'react-leaflet';
import "../../css/react-leaflet.css";
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import React, {useState} from "react";

function LocationMarker() {
    const [position, setPosition] = useState({lat: 43.364864, lng: -5.862134})
    const map = useMapEvents({
        click(e) {
            setPosition(e.latlng);

            const optionsMenu = document.getElementById("markersMenu");
            if (optionsMenu !== null) {
                const width = optionsMenu.style.width;
                if (width.toString().length === 0) {
                    optionsMenu.style.borderStyle = "solid"
                    optionsMenu.style.width = "20%"
                    optionsMenu.style.minWidth = "350px"
                }
            }
            // (document.getElementById("markersMenu") as HTMLDivElement).style.visibility = "visible";
        },
        move(e) {
            const optionsMenu = document.getElementById("markersMenu");
            if (optionsMenu !== null) {
                const width = optionsMenu.style.width;
                if (width.toString().length !== 0) {
                    optionsMenu.style.borderStyle = ""
                    optionsMenu.style.width = ""
                    optionsMenu.style.minWidth = "0px"
                }
            }
        }
    });
    (document.getElementById("latitude") as HTMLInputElement).value = position.lat.toString();
    (document.getElementById("longitude") as HTMLInputElement).value = position.lng.toString();
    return (
        <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            <Popup>
                Your are choosing this point
            </Popup>

        </Marker>
    )
}

export default LocationMarker;