import "../../css/navigation.css";
import {useSession} from "@inrupt/solid-ui-react";
import {getFile, overwriteFile} from "@inrupt/solid-client";
import {Button, Container} from "@mui/material";
import React, {useState} from "react";
import {Session} from "@inrupt/solid-client-authn-browser";
import Notification from "../Notification";
import ReactDOM from "react-dom/client";
import MapView from "../map/MapView";
import Icon from "../../img/symbols/GOMapSymbol.png";
import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../i18n";
import FriendList from "./FriendList";
import Filter from "../map/options/Filter";

import {v4 as uuidv4} from "uuid";
import ImgbbUploader from "../map/ImgbbUploader";


i18n.use(initReactI18next)

interface ButtonAddPodType {
    idName: string;
    idCategory: string;
    idComment: string;
    idScore: string;
    idLatitude: string;
    idLongitude: string;
    setItem: Function;
}

// Componente para añadir marcadores al POD
function ButtonAddPod({idName, idCategory, idComment, idScore, idLatitude, idLongitude, setItem}: ButtonAddPodType) {
    const {session} = useSession();
    const {t} = useTranslation();
    const [error,setError] = useState(false)

    async function createMarker(nameFile: string, idName: string, idCategory: string, idComment: string, idScore: string,
                                idLatitude: string, idLongitude: string, fileURL: string)  {
        let name = (document.getElementById(idName) as HTMLInputElement).value;
        let category = (document.getElementById(
            idCategory
        ) as HTMLInputElement).value;
        let comment = (document.getElementById(
            idComment
        ) as HTMLInputElement).value;
        let latitude = (document.getElementById(
            idLatitude
        ) as HTMLInputElement).value;
        let longitude = (document.getElementById(
            idLongitude
        ) as HTMLInputElement).value;
        let json = {
            "@context": "https://schema.org/",
            "@type": "Place",
            "identifier":uuidv4(),
            "name": name,
            "author": {
                "@type":"Person",
                "identifier": fileURL
            },
            "additionalType": category,
            "latitude": latitude,
            "longitude": longitude,
            "description": comment,
            "review": [],
            "image": [],
            "dateCreated": new Date().valueOf()
        };

        return await readFileFromPod(fileURL, session).then(file => {
                if (file === "") {
                    let fileContent = [json]
                    const blob = new Blob([JSON.stringify(fileContent, null, 2)], {
                        type: "application/ld+json",
                    });
                    return new File([blob], nameFile, {type: blob.type});
                } else {
                    let fileContent = JSON.parse(file);
                    fileContent.spatialCoverage.push(json);
                    const blob = new Blob([JSON.stringify(fileContent, null, 2)], {
                        type: "application/ld+json",
                    });
                    return new File([blob], nameFile, {type: blob.type});
                }
            }
        );
    };

    async function readFileFromPod(fileURL: string, session: Session){
        try {
            const file = await getFile(
                fileURL,
                {fetch: session.fetch}
            );
            return file.text();
        } catch (err) {
            return "";
        }
    }

    async function createData(url: string, file: File, session: Session){
        try {
            await overwriteFile(
                url,
                file,
                {contentType: file.type, fetch: session.fetch}
            );
        } catch (error) {
            console.log(error);
        }
    };

    const handleCloseNotification = () => {
        setShowNotification(false);
    };

    const [showNotification, setShowNotification] = useState(false);
    const createNotification = () => {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 4000); // hide notification after 5 seconds
    };

    async function handleClick() {
        if(document.getElementById("selectMap")===null){
            setError(true)
        }else{
            let route = (document.getElementById("selectMap") as HTMLSelectElement).value
            createMarker("locations.jsonld", idName, idCategory, idComment, idScore, idLatitude, idLongitude, route)
                .then((file) => createData(route, file, session))
                .then(createNotification)
                .then(() => {
                    if (route !== undefined) {
                        const root = ReactDOM.createRoot(document.getElementById("mapView") as HTMLElement);
                        root.render(<MapView
                            lat={Number((document.getElementById(idLatitude) as HTMLInputElement).value)}
                            lng={Number((document.getElementById(idLongitude) as HTMLInputElement).value)}
                            webId={[route]} setItem={setItem}/>);
                    }
                });
            let rootFriends = ReactDOM.createRoot(document.getElementById("friendDiv") as HTMLElement);
            rootFriends.render(<FriendList setItem={setItem}/>)
            const rootFilter = ReactDOM.createRoot(document.getElementById("filterDiv") as HTMLElement);
            rootFilter.render(<Filter titleFilter={t("category")} nameFilter={"option"} usersWebId={[route]}
                                      setItem={setItem}/>);
            let optionsMenu = document.getElementById("markersMenu");
            if (optionsMenu !== null) {
                const width = optionsMenu.style.width;
                if (width.toString().length !== 0) {
                    optionsMenu.style.borderStyle = "";
                    optionsMenu.style.width = "";
                    optionsMenu.style.minWidth = "0px";
                }
            }
        }

    };

    const [imageUrl, setImageUrl] = useState("");

    function handleUploadSuccess(imageUrl: string) {
        setImageUrl(imageUrl);
    }

    function handleUploadFailure(error: Error) {
        console.error(error);
    }

    return (

        <div id="addPanel">

            <div>
                <ImgbbUploader
                    apiKey="7e17d052e1f665b83d3addfe291f8047"
                    onUploadSuccess={handleUploadSuccess}
                    onUploadFailure={handleUploadFailure}
                />

                <Container id="imgContainer">
                    {imageUrl && <img src={imageUrl} alt="Uploaded" width="100%" height="100%"/>}
                </Container>



            </div>


            <Button variant="contained" color="primary" onClick={handleClick}>
                {t("confirm")}
            </Button>

            {error && (
                <Notification
                    title={t("notificationMarkerAdded")}
                    message={"debes crear un mapa"}
                    time={t("notificationTime")}
                    icon={Icon}
                    onClose={handleCloseNotification}
                />
            )}


            {showNotification && (
                <Notification
                    title={t("notificationErrorNoMapTitle")}
                    message={t("notificationErrorNoMap")}
                    time={t("notificationTime")}
                    icon={Icon}
                    onClose={handleCloseNotification}
                />
            )}
        </div>
    );
}

export default ButtonAddPod;
