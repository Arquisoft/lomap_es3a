import {useSession} from "@inrupt/solid-ui-react";
import {getFile, overwriteFile} from "@inrupt/solid-client";
import {Button} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Session} from "@inrupt/solid-client-authn-browser";
import Notification from "../Notification";
import ReactDOM from "react-dom/client";
import MapView from "../map/MapView";
import Icon from "../../img/symbols/GOMapSymbol.png";
import {useTranslation} from "react-i18next";

interface ButtonAddPodType {
    idName: string;
    idCategory: string;
    idComment: string;
    idScore: string;
    idLatitude: string;
    idLongitude: string;
}

// Componente para añadir marcadores al POD
function ButtonAddPod({
                          idName,
                          idCategory,
                          idComment,
                          idScore,
                          idLatitude,
                          idLongitude,
                      }: ButtonAddPodType) {
    const {session} = useSession();
    const {webId} = session.info;
    let webIdStore = webId?.slice(0, -15) + "private/locations.json";

    const { t } = useTranslation();

    const createMarker = async (
        nameFile: string,
        idName: string,
        idCategory: string,
        idComment: string,
        idScore: string,
        idLatitude: string,
        idLongitude: string,
        fileURL: string
    ) => {
        let name = (document.getElementById(idName) as HTMLInputElement).value;
        let category = (document.getElementById(
            idCategory
        ) as HTMLInputElement).value;
        let comment = (document.getElementById(
            idComment
        ) as HTMLInputElement).value;
        let score = (document.getElementById(idScore) as HTMLDivElement).innerText;
        let latitude = (document.getElementById(
            idLatitude
        ) as HTMLInputElement).value;
        let longitude = (document.getElementById(
            idLongitude
        ) as HTMLInputElement).value;

        let json = {
            name: name,
            category: category,
            comment: comment,
            score: score,
            latitude: latitude,
            longitude: longitude,
        };

        return  await readFileFromPod(fileURL, session).then(file => {
                if (file === "") {
                    const blob = new Blob([JSON.stringify(json, null, 2)], {
                        type: "application/json",
                    });
                    return new File([blob], nameFile, {type: blob.type});
                } else {
                    let fileContent = Array.from(JSON.parse(file));
                    fileContent.push(json);
                    const blob = new Blob([JSON.stringify(fileContent, null, 2)], {
                        type: "application/json",
                    });
                    return new File([blob], nameFile, {type: blob.type});
                }
            }
        );
    };

    const readFileFromPod = async (fileURL: string, session: Session) => {
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

    const createData = async (url: string, file: File, session: Session) => {
        try {
            let savedFile = await overwriteFile(
                url,
                file,
                {contentType: file.type, fetch: session.fetch}
            );
        } catch (error) {
            console.log(error);
        }
    };

    const handleOpenNotification = () => {
        setShowNotification(true);
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

    const handleClick = async () => {
         createMarker(
            "locations.json",
            idName,
            idCategory,
            idComment,
            idScore,
            idLatitude,
            idLongitude,
            webIdStore,

        )
            .then(  (file) =>  createData(webIdStore, file, session))
            .then(createNotification)
             .then( ()=> {
                 const root = ReactDOM.createRoot(document.getElementById("screen") as HTMLElement);
                root.render(<MapView
                    lat={ Number((document.getElementById(idLatitude) as HTMLInputElement).value)}
                    lng={Number((document.getElementById(idLongitude) as HTMLInputElement).value)
                }/>);
             });

        let optionsMenu = document.getElementById("markersMenu");
        if (optionsMenu !== null) {
            const width = optionsMenu.style.width;
            if (width.toString().length !== 0) {
                optionsMenu.style.borderStyle = "";
                optionsMenu.style.width = "";
                optionsMenu.style.minWidth = "0px";
            }
        }
    };

    return (

        <div id="addPanel">
            <Button variant="contained" color="primary" onClick={handleClick}>
                {t("confirm")}
            </Button>
            {showNotification && (
                <Notification
                    title={t("notification_marker_added")}
                    message={t("notification_message_marker")}
                    time={t("notification_time")}
                    icon={Icon}
                    onClose={handleCloseNotification}
                />
            )}
        </div>
    );
}

export default ButtonAddPod;
