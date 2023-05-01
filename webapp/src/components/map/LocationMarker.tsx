import {Marker, useMapEvents} from 'react-leaflet';
import "../../css/react-leaflet.css";
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import React, {useState} from "react";

function LocationMarker(props:{setShowLocationMarker:Function,showLocationMarker:boolean, activeMarker:{id: string, iconSize: [number, number]} | null}) {
    const [position, setPosition] = useState({lat: 43.35470393256756, lng: -5.85129134167161})

    useMapEvents({
        click(e) {
            if(props.activeMarker!==null){
                props.activeMarker.iconSize = [30,35]
            }
            props.setShowLocationMarker(true)
            setPosition(e.latlng);

            const showMarkerPanel = document.getElementById("showMarkerPanel");
            if (showMarkerPanel !== null) {
                showMarkerPanel.style.width = "0";
            }

            const addMarkerPanel = document.getElementById("addMarkerPanel");
            if (addMarkerPanel !== null) {
                addMarkerPanel.style.width = "25vw";
            }
        }
    });
    (document.getElementById("latitude") as HTMLInputElement).value = position.lat.toString();
    (document.getElementById("longitude") as HTMLInputElement).value = position.lng.toString();

    return (
        props.showLocationMarker ?
            <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            </Marker>
        :
        <div></div>
    )
}

export default LocationMarker;