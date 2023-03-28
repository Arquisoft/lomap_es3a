import {MapContainer, TileLayer} from 'react-leaflet';
import "../../css/react-leaflet.css";
import 'leaflet/dist/leaflet.css';
import LocationMarker from "./LocationMarker";
import MarkersPOD from "../pod/MarkersPOD";
import Notification from "./Notification";
import React from "react";

function Map(props: { lat: number; lng:number; }) {
    const position ={lat: props.lat, lng:props.lng}
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={true} zoomControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker/>
            <MarkersPOD/>
        </MapContainer>
    );
}

export default Map