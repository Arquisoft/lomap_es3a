import {Session} from "@inrupt/solid-client-authn-browser";
import {getFile} from "@inrupt/solid-client";
import {Icon} from "leaflet";
import {Marker, Popup} from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {useSession} from "@inrupt/solid-ui-react";
import {Point} from "./Point";
import {useEffect, useState} from "react";
import {forEach} from "react-bootstrap/ElementChildren";


async function readFileFromPod(fileURL: string, session: Session) {
    try {
        const file = await getFile(
            fileURL,
            {fetch: session.fetch}
        );
        let fileContent = await file.text()
        let fileJSON = JSON.parse(fileContent)
        let markers = []

        let latitude = Number(fileJSON.latitude);
        let longitude = Number(fileJSON.longitude);
        let name = fileJSON.name;
        let category = fileJSON.category;
        let score = fileJSON.score;
        let comment = fileJSON.comment;
        markers.push(new Point(Date.now(),latitude,longitude,name,category,comment,score))

        return markers
    } catch (err) {
        console.log(err);
    }
}


function MarkersPOD() {
    const { session } = useSession();
    const { webId } = session.info;
    let webIdStore = webId?.slice(0, -15) + 'private/marker.json';
    const [points, setPoints] = useState<Point[]>([]);


    readFileFromPod(webIdStore,session).then(points => {
        if(points !== undefined){
            setPoints(points)
        }}
    )

    return(
        <div>
            {
                points.map((item) => (
                    <Marker key={item.id} position={{lat:item.latitude,lng:item.longitude}} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
                        <Popup>
                            Name: {item.name}
                            Latitude: {item.latitude}
                            Longitude: {item.longitude}
                            Comment: {item.comment}
                            Category: {item.category}
                            Score: {item.score}
                        </Popup>
                    </Marker>
                ))

            }
        </div>
    )




}

export default MarkersPOD;