import {useSession} from "@inrupt/solid-ui-react";
import {saveFileInContainer,} from "@inrupt/solid-client";
import {ButtonAddPodType} from "../../shared/shareddtypes";
import {Session} from "@inrupt/solid-client-authn-browser";
import {Button} from "@mui/material";


async function createMarker(nameFile: string, idName: string, idCategory: string, idComment: string, idScore: string) {
    let name = (document.getElementById(idName) as HTMLInputElement).value
    let category = (document.getElementById(idCategory) as HTMLInputElement).value
    let comment = (document.getElementById(idComment) as HTMLInputElement).value
    let score = (document.getElementById(idScore) as HTMLInputElement).value

    let json = {
        "name": name,
        "category": category,
        "comment": comment,
        "score": score
    }


    const blob = new Blob([JSON.stringify(json, null, 2)], {
        type: "application/json",
    });

    let file = new File([blob], nameFile, {type: blob.type});
    return file;

}

async function createData(url: string, file: File, session: Session) {
    try {
        let savedFile = await saveFileInContainer(
            url,
            file,
            {slug: file.name, contentType: file.type, fetch: session.fetch}
        );
    } catch (error) {
        console.log(error);
    }
}


function ButtonAddPod({idName, idCategory, idComment, idScore}: ButtonAddPodType) {
    const {session} = useSession();
    const {webId} = session.info;
    let webIdStore = webId?.slice(0, -15) + "public/"


    return (
        <div id="addPanel">
            <Button variant="contained" color="primary"
                    onClick={() => {
                        createMarker("marker.json", idName, idCategory, idComment, idScore).then(file => createData(webIdStore, file, session));
                        (document.getElementById("markersMenu") as HTMLDivElement).style.visibility = "hidden";
                    }}>
                Add Marker
            </Button>
        </div>

    )
}

export default ButtonAddPod;