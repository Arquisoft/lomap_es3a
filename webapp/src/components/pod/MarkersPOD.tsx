import {Icon} from "leaflet";
import {Marker} from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {useSession} from "@inrupt/solid-ui-react";
import {Point} from "./Point";
import * as React from "react";
import {useEffect, useState} from "react";
import BarIcon from "../../img/icons/bar.png";
import RestaurantIcon from "../../img/icons/restaurant.png";
import ShopIcon from "../../img/icons/shop.png";
import SupermarketIcon from "../../img/icons/supermarket.png";
import HotelIcon from "../../img/icons/hotel.png";
import CinemaIcon from "../../img/icons/cinema.png";
import PublicIcon from "../../img/icons/public.png";
import AcademicIcon from "../../img/icons/academic.png";
import SportIcon from "../../img/icons/sport.png";
import MuseumIcon from "../../img/icons/museum.png";
import ParkIcon from "../../img/icons/park.png";
import OtherIcon from "../../img/icons/other.png";
import LandscapeIcon from "../../img/icons/landscape.png";
import MonumentIcon from "../../img/icons/monument.png";
import HospitalIcon from "../../img/icons/hospital.png";
import PoliceIcon from "../../img/icons/police.png";
import TransportIcon from "../../img/icons/transport.png";
import EntertainmentIcon from "../../img/icons/entertainment.png";
import LocationMarker from "../map/LocationMarker";
import {readFile} from "./PODsInteraction";

interface IDictionary {
    [index: string]: string;
}

let categories = {
    All: markerIconPng,
    bar: BarIcon,
    restaurant: RestaurantIcon,
    shop: ShopIcon,
    supermarket: SupermarketIcon,
    hotel: HotelIcon,
    cinema: CinemaIcon,
    academicInstitution: AcademicIcon,
    publicInstitution: PublicIcon,
    sportsClub: SportIcon,
    museum: MuseumIcon,
    park: ParkIcon,
    landscape: LandscapeIcon,
    monument: MonumentIcon,
    hospital: HospitalIcon,
    policeStation: PoliceIcon,
    transportCenter: TransportIcon,
    entertainment: EntertainmentIcon,
    other: OtherIcon
} as IDictionary




function MarkersPOD(props: { webId: string[], setItem: Function }) {
    const {session} = useSession();
    const [points, setPoints] = useState<Point[]>([]);
    const [showLocationMarker, setShowLocationMarker] = useState(false);

    useEffect(() => {
        async function fetchPoints() {
            const newPoints = props.webId !== undefined ? await readFile(props.webId, session) : undefined;
            if (newPoints) {
                setPoints(newPoints);
            }
        }

        fetchPoints();
    }, [props.webId, session]);

    return (
        <div>
            {
                points.map((item) => (
                    <Marker key={item.id} position={{lat: item.latitude, lng: item.longitude}}
                            icon={new Icon({
                                iconUrl: categories[item.category] !== undefined ? categories[item.category] : markerIconPng
                            })}
                            eventHandlers={{
                                click: (e) => {
                                    const addMarkerPanel = document.getElementById("addMarkerPanel");
                                    if (addMarkerPanel !== null) {
                                        addMarkerPanel.style.width = "0";
                                    }

                                    const showMarkerPanel = document.getElementById("showMarkerPanel");
                                    if (showMarkerPanel !== null) {
                                        showMarkerPanel.style.width = "25vw";
                                    }
                                    props.setItem(item);
                                    setShowLocationMarker(false);
                                }
                            }}>
                    </Marker>
                ))
            }
             <LocationMarker setShowLocationMarker={setShowLocationMarker} showLocationMarker={showLocationMarker}/>
        </div>
    )
}

export default MarkersPOD;
