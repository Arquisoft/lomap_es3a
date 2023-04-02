import {
    getSolidDataset,
    getTerm,
    getThing,
    getTermAll,
    IriString,
    SolidDataset,
} from '@inrupt/solid-client'
import { foaf, vcard, owl, rdfs } from 'rdf-namespaces'
import { RateLimiter } from 'limiter'
import {Session} from "@inrupt/solid-client-authn-browser";


export interface PersonData {
    webId: IriString
    name: string
    friends: IriString[]
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
    const data: PersonData = { webId: webId, name: '', friends: [] }
    if (webId) {
        const dataset = await findFullPersonProfile(webId,session)
        dataset.reduce((data, d) => {
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
                console.log("hlo")
            }
            return data
        }, data)
        return data
    }

    return data;
}