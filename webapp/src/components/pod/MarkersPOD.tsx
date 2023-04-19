import {Session} from "@inrupt/solid-client-authn-browser";
import {getFile} from "@inrupt/solid-client";
import {Icon} from "leaflet";
import {Marker, Popup} from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {useSession} from "@inrupt/solid-ui-react";
import {Point} from "./Point";
import {v4 as uuidv4} from 'uuid';
import {useEffect, useState} from "react";
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Avatar, CardActionArea, CardActions, CardHeader} from '@mui/material';
import Rijksmuseum from "../../img/Rijksmuseum.png";
import Rating from "@mui/material/Rating";
import {red} from "@mui/material/colors";
import IconButton, {} from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {ExpandMore} from "@mui/icons-material";
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
import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../i18n";

i18n.use(initReactI18next)
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

async function readFileFromPod(fileURL: string[], session: Session) {
    try {
        let markers = []
        for (let i = 0; i < fileURL.length; i++) {
            const file = await getFile(
                fileURL[i],
                {fetch: session.fetch}
            );
            let fileContent = await file.text()
            let fileJSON = JSON.parse(fileContent)
            for (let i = 0; i < fileJSON.length; i++) {
                let latitude = Number(fileJSON[i].latitude);
                let longitude = Number(fileJSON[i].longitude);
                let name = fileJSON[i].name;
                let category = fileJSON[i].category;
                let score = fileJSON[i].reviewScores[0].score;
                let comment = fileJSON[i].description;
                var e = document.getElementById("category");
                // @ts-ignore
                // var value = e.value;
                // @ts-ignore
                var text = e.options[e.selectedIndex].value;
                if (category === text || text === "All")
                    markers.push(new Point(uuidv4(), latitude, longitude, name, category, comment, score))
        }

        }
        return markers
    } catch (err) {
        console.log(err);
    }
}


function MarkersPOD(props: { webId: string[], setItem: Function }) {
    const {session} = useSession();
    const [points, setPoints] = useState<Point[]>([]);
    const {t} = useTranslation();

    useEffect(() => {
        async function fetchPoints() {
            const newPoints = props.webId !== undefined ? await readFileFromPod(props.webId, session) : undefined;
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
                                }
                            }}>
                    </Marker>
                ))
            }
        </div>
    )
}

export default MarkersPOD;
