import {Session} from "@inrupt/solid-client-authn-browser";
import {getFile} from "@inrupt/solid-client";

async function readFileFromPod(fileURL: string, session: Session, saveAsFilename: string) {
    try {
        const file = await getFile(
            fileURL,
            {fetch: session.fetch}
        );
        
    } catch (err) {
        console.log(err);
    }
}


function MarkersPOD() {
    return (
        <h2>Hola</h2>
    )

}

export default MarkersPOD;