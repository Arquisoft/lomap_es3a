import {MapContainer, TileLayer} from 'react-leaflet';
import "../../css/react-leaflet.css";
import 'leaflet/dist/leaflet.css';
import LocationMarker from "./LocationMarker";
import MarkersPOD from "../pod/MarkersPOD";
import React from "react";

function MapView(props: { lat: number; lng: number; webId: string[]; setItem: Function }) {
    const position = {lat: props.lat, lng: props.lng}

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={true} zoomControl={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkersPOD webId={props.webId} setItem={props.setItem}/>
        </MapContainer>
    );
}

export default MapView
