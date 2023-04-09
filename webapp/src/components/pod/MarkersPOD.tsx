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

interface IDictionary {
    [index: string]: string;
}

let categories = {
    All: markerIconPng,
    Bars: BarIcon,
    Restaurants: RestaurantIcon,
    Shops: ShopIcon,
    Supermarkets: SupermarketIcon,
    Hotels: HotelIcon,
    Cinemas: CinemaIcon,
    Academic_Institution: AcademicIcon,
    Public_Institution: PublicIcon,
    Sports_Club: SportIcon,
    Museum: MuseumIcon,
    Parks: ParkIcon,
    Others: OtherIcon
} as IDictionary

async function readFileFromPod(fileURL: string, session: Session) {
    try {
        const file = await getFile(
            fileURL,
            {fetch: session.fetch}
        );
        let fileContent = await file.text()
        let fileJSON = JSON.parse(fileContent)
        let markers = []
        for (let i = 0; i < fileJSON.length; i++) {
            let latitude = Number(fileJSON[i].latitude);
            let longitude = Number(fileJSON[i].longitude);
            let name = fileJSON[i].name;
            let category = fileJSON[i].category;
            let score = fileJSON[i].score;
            let comment = fileJSON[i].comment;
            var e = document.getElementById("category");
            // @ts-ignore
            // var value = e.value;
            // @ts-ignore
            var text = e.options[e.selectedIndex].value;
            if (category === text  || text ==="All")
                markers.push(new Point(uuidv4(), latitude, longitude, name, category, comment, score))
        }
        return markers
    } catch (err) {
        console.log(err);
    }
}


function MarkersPOD() {
    const {session} = useSession();
    const {webId} = session.info;
    let webIdStore = webId?.slice(0, -15) + 'private/locations.json';
    const [points, setPoints] = useState<Point[]>([]);

    useEffect(() => {
        async function fetchPoints() {
            const newPoints = webId !== undefined ? await readFileFromPod(webIdStore, session) : undefined;
            if (newPoints) {
                setPoints(newPoints);
            }
        }

        fetchPoints();
    }, [webId, webIdStore, session]);

    return (
        <div>
            {
                points.map((item) => (
                    <Marker key={item.id} position={{lat: item.latitude, lng: item.longitude}}
                            icon={new Icon({
                                iconUrl: categories[item.category]
                            })}>
                        <Popup>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon/>
                                    </IconButton>
                                }
                                title="Rodrigo Alvarez"
                                subheader="April 08, 2023"
                            />
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={Rijksmuseum}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {item.category}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.comment}
                                    </Typography>
                                    <Typography component="legend"></Typography>
                                    <Rating name="read-only" value={item.score} readOnly/>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                            <FavoriteIcon/>
                                        </IconButton>
                                        <IconButton aria-label="share">
                                            <ShareIcon/>
                                        </IconButton>
                                        <ExpandMore
                                        >
                                            <ExpandMoreIcon/>
                                        </ExpandMore>
                                    </CardActions>
                                </CardContent>
                            </CardActionArea>
                        </Popup>
                    </Marker>
                ))
            }
        </div>
    )
}

export default MarkersPOD;
