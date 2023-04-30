import {Session} from "@inrupt/solid-client-authn-browser";
import {getFile, overwriteFile} from "@inrupt/solid-client";

export async function readFileFromPod(fileURL: string, session: Session){
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

export async function createData(url: string, file: File, session: Session) {
    try {
        await overwriteFile(
            url,
            file,
            {contentType: file.type, fetch: session.fetch}
        );
    } catch (error) {
        console.log(error);
    }
}