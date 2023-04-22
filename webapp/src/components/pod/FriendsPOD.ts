import {
    getSolidDataset,
    getTerm,
    getThing,
    getTermAll,
    IriString,
    SolidDataset, Thing, buildThing, setThing, saveSolidDatasetAt,
} from '@inrupt/solid-client'
import { foaf, vcard, owl, rdfs } from 'rdf-namespaces'
import {Session,fetch} from "@inrupt/solid-client-authn-browser";




export interface PersonData {
    webId: string
    photo: string
    name: string
    friends: string[]
}

const findFullPersonProfile = async (
    webId: IriString,
    session:Session,
    visited = new Set<IriString>(),
    response: SolidDataset[] = [],
    fail = true,
    iri = webId,
): Promise<SolidDataset[]> => {
    try {
        visited.add(iri)
        const dataset = await getSolidDataset(iri, { fetch: session.fetch})
        const person = getThing(dataset, webId)
        if (person) {
            response.push(dataset)
            const same: string[] = getTermAll(person, owl.sameAs).map(a => a.value)
            const see: string[] = getTermAll(person, rdfs.seeAlso).map(a => a.value)

            for (const uri of [...same, ...see]) {
                console.log('extending', uri)
                if (!visited.has(uri))
                    await findFullPersonProfile(webId,session, visited, response, false, uri)
            }
        }
    } catch (e) {
        if (fail) throw e
    }
    return response
}





export const findPersonData = async (session: Session,webId: IriString): Promise<PersonData> => {
    const data: PersonData = { webId: webId, photo:'',name: '', friends: [] }
    if (webId) {
        const dataset = await findFullPersonProfile(webId,session)
        const result = dataset.reduce((data, d) => {
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
        return result
    }

    return data;
}

export async function removeFriendFromPOD(friendWebId:string,webId:string){
    let solidDataset = await getSolidDataset(webId!);
    let friends = getThing(solidDataset, webId!) as Thing;
    friends = buildThing(friends).removeUrl(foaf.knows, friendWebId).build();
    solidDataset = setThing(solidDataset, friends);
    await saveSolidDatasetAt(webId!, solidDataset, { fetch: fetch });
}

export async function addFriendToPod(provider:string,friendName:string,webId:string,session:Session){
    let friendWebId = provider.replace(/https:\/\//, "https://"+friendName+".");
    friendWebId += "/profile/card#me"

    try{
        await findFullPersonProfile(webId,session)
        let solidDataset = await getSolidDataset(webId);
        let friends = getThing(solidDataset, webId) as Thing;

        friends = buildThing(friends).addUrl(foaf.knows, friendWebId).build();
        solidDataset = setThing(solidDataset, friends);
        await saveSolidDatasetAt(webId, solidDataset, { fetch: fetch })
    }catch(e){
        console.log(e)

    }


}
