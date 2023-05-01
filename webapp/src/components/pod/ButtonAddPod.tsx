import "../../css/navigation.css";
import {useSession} from "@inrupt/solid-ui-react";
import {Button, Container} from "@mui/material";
import React, {useState} from "react";
import Notification from "../Notification";
import ReactDOM from "react-dom/client";
import MapView from "../map/MapView";
import Icon from "../../img/symbols/GOMapSymbol.png";
import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../i18n";
import Filter from "../map/options/Filter";
import ImgbbUploader from "../map/ImgbbUploader";
import {createData, createMarker} from "./PODsInteraction";


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
    const [error, setError] = useState(false)
    const [noSelectedMap, setNoSelectedMap] = useState(false)
    const [showNotification, setShowNotification] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [errorNoMarkerName,setErrorNoMarkerName] = useState(false)

    const handleCloseNotification = () => {
        setShowNotification(false);
        setError(false)
        setNoSelectedMap(false)
        setErrorNoMarkerName(false)
    };


    const createNotification = () => {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 4000); // hide notification after 5 seconds
    };

    function removeContent(){
        (document.getElementById("namePlace") as HTMLInputElement).value="";
        (document.getElementById("comment") as HTMLTextAreaElement).value="";
    }

    async function handleClick() {
        if(document.getElementById("selectMap")===null){
            setError(true)
        }else if((document.getElementById(idName) as HTMLInputElement).value==="") {
            setErrorNoMarkerName(true)
        }else{
            let route = (document.getElementById("selectMap") as HTMLSelectElement).value
            if(route===""){
                setNoSelectedMap(true)
            }else{
                createMarker(idName, idCategory, idComment, idScore, idLatitude, idLongitude, route,session)
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
                const addMarkerPanel = document.getElementById("addMarkerPanel");
                if (addMarkerPanel !== null) {
                    addMarkerPanel.style.width = "0";
                }
                removeContent()
            }
        }
    };

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
                    {imageUrl && <img src={imageUrl} alt="Uploaded" width="100%" height="100%" id="upload-img"/>}
                </Container>
            </div>
            <Button variant="contained" color="primary" onClick={handleClick}>
                {t("confirm")}
            </Button>


            {error && (
                <Notification
                    title={t("notificationErrorNoMapTitle")}
                    message={t("notificationErrorNoMap")}
                    time={t("notificationTime")}
                    icon={Icon}
                    onClose={handleCloseNotification}
                />
            )}

            {noSelectedMap && (
                <Notification
                    title={t("notificationNoMapSelectedTitle")}
                    message={t("notificationNoMapSelected")}
                    time={t("notificationTime")}
                    icon={Icon}
                    onClose={handleCloseNotification}
                />
            )}

            {errorNoMarkerName && (
                <Notification
                    title={t("notificationNoMarkerNameTitle")}
                    message={t("notificationNoMarkerName")}
                    time={t("notificationTime")}
                    icon={Icon}
                    onClose={handleCloseNotification}
                />
            )}

            {showNotification && (
                <Notification
                    title={t("notificationMarkerAdded")}
                    message={t("notificationMessageMarker")}
                    time={t("notificationTime")}
                    icon={Icon}
                    onClose={handleCloseNotification}
                />
            )}
        </div>
    );
}

export default ButtonAddPod;
