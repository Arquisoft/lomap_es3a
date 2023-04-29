import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {Icon} from "leaflet";
import React from "react";
import GOMapSymbol from "../../img/symbols/GOMapSymbol.png";
import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../i18n";

i18n.use(initReactI18next);

function ContactMap() {
    const position = {lat: 43.35470393256756, lng: -5.85129134167161};

    const {t} = useTranslation();

    return (
        <MapContainer center={position} zoom={17} scrollWheelZoom={true} zoomControl={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={position}
                icon={new Icon({
                    iconUrl: GOMapSymbol,
                    iconSize: [48, 48],
                    iconAnchor: [24, 24],
                })}
            >
                <Popup>{t("office")}</Popup>
            </Marker>
        </MapContainer>
    );
}

export default ContactMap;
