import {
    buildThing,
    createAclFromFallbackAcl,
    createContainerAt,
    getContainedResourceUrlAll,
    getFile,
    getResourceAcl,
    getSolidDataset,
    getSolidDatasetWithAcl,
    getTerm,
    getTermAll,
    getThing,
    hasAccessibleAcl,
    hasFallbackAcl,
    hasResourceAcl,
    overwriteFile,
    saveAclFor,
    saveSolidDatasetAt,
    setAgentDefaultAccess,
    setAgentResourceAccess,
    setThing,
    SolidDataset,
    Thing,
} from '@inrupt/solid-client'
import {foaf, vcard} from 'rdf-namespaces'
import {fetch, Session} from "@inrupt/solid-client-authn-browser";
import {v4 as uuidv4} from "uuid";
import {ImageMarker, Point, Review} from "./Point";


export interface PersonData {
    webId: string
    photo: string
    name: string
    friends: string[]
}

export interface FriendMaps {
    webId: string
    name: string
    maps: string[]
}

async function findFullPersonProfile(webId: string, session: Session, response: SolidDataset[] = []) {
    try {
        const dataset = await getSolidDataset(webId, {fetch: session.fetch})
        const person = getThing(dataset, webId)
        if (person) {
            response.push(dataset)
        }
    } catch (e) {
        console.log(e);
    }
    return response
}


export async function findPersonData(session: Session, webId: string) {
    const data: PersonData = {webId: webId, photo: '', name: '', friends: []}
    if (webId) {
        const dataset = await findFullPersonProfile(webId, session)
        return dataset.reduce((data, d) => {
            const person = getThing(d, webId)
            if (person) {
                const friends = getTermAll(person, foaf.knows).map(a => a.value)
                data.friends = data.friends
                    .concat(friends)
                    .filter((a, i, data) => data.indexOf(a) === i)
                if (!data.name)
                    data.name =
                        getTerm(person, foaf.name)?.value ??
                        getTerm(person, vcard.fn)?.value ??
                        ''
                if (!data.photo)
                    data.photo =
                        getTerm(person, vcard.hasPhoto)?.value ??
                        getTerm(person, foaf.img)?.value ??
                        ''
            }
            return data
        }, data)
    }
    return data;
}

export async function removeFriendFromPOD(friendWebId: string, webId: string) {
    let solidDataset = await getSolidDataset(webId);
    let friends = getThing(solidDataset, webId) as Thing;
    friends = buildThing(friends).removeUrl(foaf.knows, friendWebId).build();
    solidDataset = setThing(solidDataset, friends);
    await saveSolidDatasetAt(webId, solidDataset, {fetch: fetch});
}

export async function addFriendToPod(provider: string, friendName: string, webId: string, session: Session) {
    let friendWebId = provider.replace(/https:\/\//, "https://" + friendName + ".");
    friendWebId += "/profile/card#me"

    try {
        await findFullPersonProfile(friendWebId, session)

    } catch (e) {
        return true
    }

    let solidDataset = await getSolidDataset(webId);
    let friends = getThing(solidDataset, webId) as Thing;

    friends = buildThing(friends).addUrl(foaf.knows, friendWebId).build();
    solidDataset = setThing(solidDataset, friends);
    await saveSolidDatasetAt(webId, solidDataset, {fetch: fetch})
    return false
}

export async function changePermissions(webId: string, friendWebId: string, session: Session) {
    // Fetch the SolidDataset and its associated ACLs, if available:
    const myDatasetWithAcl = await getSolidDatasetWithAcl(webId + "lomap/", {fetch: session.fetch});

    // Obtain the SolidDataset's own ACL, if available,
    // or initialise a new one, if possible:
    let resourceAcl;
    if (!hasResourceAcl(myDatasetWithAcl)) {
        if (!hasAccessibleAcl(myDatasetWithAcl)) {
            throw new Error(
                "The current user does not have permission to change access rights to this Resource."
            );
        }
        if (!hasFallbackAcl(myDatasetWithAcl)) {
            throw new Error(
                "The current user does not have permission to see who currently has access to this Resource."
            );
            // Alternatively, initialise a new empty ACL as follows,
            // but be aware that if you do not give someone Control access,
            // **nobody will ever be able to change Access permissions in the future**:
            // resourceAcl = createAcl(myDatasetWithAcl);
        }
        resourceAcl = createAclFromFallbackAcl(myDatasetWithAcl);
    } else {
        resourceAcl = getResourceAcl(myDatasetWithAcl);
    }

    // Give someone Control access to the given Resource:
    let updatedAcl = setAgentResourceAccess(
        resourceAcl,
        friendWebId,
        {read: true, append: false, write: false, control: false}
    );
    updatedAcl = setAgentDefaultAccess(
        updatedAcl,
        friendWebId,
        {read: true, append: false, write: false, control: false}
    )


    // Now save the ACL:
    await saveAclFor(myDatasetWithAcl, updatedAcl, {fetch: session.fetch});
}

export async function checkIfFolderExists(webId: string, session: Session){
    let uri = webId.split("/").slice(0, 3).join("/").concat("/lomap/");
    try {
        await getSolidDataset(uri);
    } catch (error) {
        await createContainerAt(uri, {fetch: session.fetch});
    }
}

export async function getMaps(webId: string, session: Session) {
    let uri = webId.split("/").slice(0, 3).join("/").concat("/lomap/");
    try {
        let dataset = await getSolidDataset(uri, {fetch: session.fetch});
        return getContainedResourceUrlAll(dataset);
    } catch (e) {
        return ["User Unauthorized"]
    }

}

export async function createNewMap(session: Session, mapName: string) {

    if (mapName !== undefined && mapName !== null && mapName.trim().toString() !== "") {
        try {
            let author = {
                "@type": "Person",
                "identifier": session.info.webId
            }

            let map = {
                "@context": "https://schema.org/",
                "@type": "Map",
                "id": uuidv4(),
                "name": mapName,
                "author": author,
                "spatialCoverage": []
            }

            const blob = new Blob([JSON.stringify(map, null, 2)], {type: "application/ld+json"});
            let file = new File([blob], map.name + ".jsonld", {type: blob.type});
            let uri = session.info.webId!.split("/").slice(0, 3).join("/").concat("/lomap/");
            let fileUrl = (uri + file.name).trim();
            await overwriteFile(
                fileUrl,
                file,
                {contentType: file.type, fetch: session.fetch}
            );
        } catch (error) {
            console.log(error);
        }
    }

}

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

export async function createData(url: string, file: File, session: Session){
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

export async function createMarker(idName: string, idCategory: string, idComment: string, idScore: string,
                                   idLatitude: string, idLongitude: string, fileURL: string, session:Session)  {
    let name = (document.getElementById(idName) as HTMLInputElement).value;
    let identifier = fileURL.split("lomap")[0] + "profile/card#me"
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

    let imgUrl = (document.getElementById(
        "upload-img"
    ) as HTMLInputElement)?.src;

    let json = {
        "@context": "https://schema.org/",
        "@type": "Place",
        "identifier":uuidv4(),
        "name": name,
        "author": {
            "@type":"Person",
            "identifier": identifier
        },
        "additionalType": category,
        "latitude": latitude,
        "longitude": longitude,
        "description": comment,
        "review": [],
        "image": [{
            "@type": "ImageObject",
            "author": {
                "@type": "Person",
                "identifier": identifier
            },
            "contentUrl": imgUrl
        }],
        "dateCreated": new Date().valueOf()
    };

    if (imgUrl === null || imgUrl === undefined) {
        json.image = [];
    }

    return await readFileFromPod(fileURL, session).then(file => {
            if (file === "") {
                let fileContent = [json]
                const blob = new Blob([JSON.stringify(fileContent, null, 2)], {
                    type: "application/ld+json",
                });
                return new File([blob], fileURL, {type: blob.type});
            } else {
                let fileContent = JSON.parse(file);
                fileContent.spatialCoverage.push(json);
                const blob = new Blob([JSON.stringify(fileContent, null, 2)], {
                    type: "application/ld+json",
                });
                return new File([blob], fileURL, {type: blob.type});
            }
        }
    );
};

export async function readFile(fileURL: string[], session: Session) {
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

