import { MapContainer,Marker,Popup,TileLayer,useMap} from 'react-leaflet';
import "../css/react-leaflet.css";
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
 
 const Map = () => {
  const position = {lat:43.364864, lng:-5.862134}

  return(
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}  icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
        <Popup>
          Your are place here
        </Popup>
      </Marker>
    </MapContainer>
  );
 }

 export default Map;