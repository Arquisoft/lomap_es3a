import {useSession} from "@inrupt/solid-ui-react";
import {getFile, overwriteFile,} from "@inrupt/solid-client";
import {ButtonAddPodType} from "../../shared/shareddtypes";
import {Session} from "@inrupt/solid-client-authn-browser";
import {Button} from "@mui/material";

async function createMarker(nameFile: string, idName: string, idCategory: string, idComment: string, idScore: string, idLatitude: string, idLongitude: string,
                            fileURL: string, session: Session) {
    let name = (document.getElementById(idName) as HTMLInputElement).value
    let category = (document.getElementById(idCategory) as HTMLInputElement).value
    let comment = (document.getElementById(idComment) as HTMLInputElement).value
    let score = (document.getElementById(idScore) as HTMLInputElement).value
    let latitude = (document.getElementById(idLatitude) as HTMLInputElement).value
    let longitude = (document.getElementById(idLongitude) as HTMLInputElement).value

    let json = {
        "name": name,
        "category": category,
        "comment": comment,
        "score": score,
        "latitude": latitude,
        "longitude": longitude
    }

    return readFileFromPod(fileURL, session).then(file => {
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
}

async function readFileFromPod(fileURL: string, session: Session) {
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

async function createData(url: string, file: File, session: Session) {
    try {
        let savedFile = await overwriteFile(
            url,
            file,
            {contentType: file.type, fetch: session.fetch}
        );
        console.log("Marcador añadido");
    } catch (error) {
        console.log(error);
    }
}


function ButtonAddPod({idName, idCategory, idComment, idScore, idLatitude, idLongitude}: ButtonAddPodType) {
    const {session} = useSession();
    const {webId} = session.info;
    let webIdStore = webId?.slice(0, -15) + "private/locations.json";


    return (
        <div id="addPanel">
            <Button variant="contained" color="primary"
                    onClick={() => {
                        createMarker("locations.json", idName, idCategory, idComment, idScore, idLatitude, idLongitude, webIdStore, session).then(file => createData(webIdStore, file, session));
                        let optionsMenu = document.getElementById("markersMenu");
                        if (optionsMenu !== null) {
                            const width = optionsMenu.style.width;
                            if (width.toString().length !== 0) {
                                optionsMenu.style.borderStyle = ""
                                optionsMenu.style.width = ""
                                optionsMenu.style.minWidth = "0px"
                            }
                        }
                    }}>
                Add Marker
            </Button>
        </div>

    )
}

export default ButtonAddPod;