import {Session} from "@inrupt/solid-client-authn-browser";
import {getFile} from "@inrupt/solid-client";
import {Icon} from "leaflet";
import {Marker} from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {useSession} from "@inrupt/solid-ui-react";
import {ImageMarker, Point, Review} from "./Point";
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
        for (const element of fileURL) {
            if(element !== undefined){
                const file = await getFile(
                    element,
                    {fetch: session.fetch}
                );
                let fileContent = await file.text()
                let fileJSON = JSON.parse(fileContent)
                for (const element of fileJSON.spatialCoverage) {
                    let review = [];
                    let images = [];
                    let latitude = Number(element.latitude);
                    let longitude = Number(element.longitude);
                    let identifier = element.identifier;
                    let author = element.author.identifier;
                    let name = element.name;
                    let category = element.additionalType;
                    let description = element.description;
                    let date = element.dateCreated;
                    for (const reviewElement of element.review) {
                        review.push(new Review(reviewElement.author.identifier,
                            reviewElement.reviewRating.ratingValue,
                            reviewElement.datePublished,
                            reviewElement.reviewBody));
                    }
                    for (const imageElement of element.image) {
                        images.push(new ImageMarker(imageElement.author.identifier, imageElement.contentUrl));
                    }
                    let e = document.getElementById("category") as HTMLSelectElement;
                    let text = e.options[e.selectedIndex].value;
                    if (category === text || text === "All")
                        markers.push(new Point(identifier, author, latitude,
                            longitude, name, category, description, date, review, images));
                }
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
