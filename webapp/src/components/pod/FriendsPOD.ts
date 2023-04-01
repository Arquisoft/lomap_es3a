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
import ReactDOM from "react-dom/client";
import OptionsPanel from "../map/options/OptionsPanel";
import React from "react";

export interface PersonData {
    webId: IriString
    name: string
    friends: IriString[]
}

const limiter = new RateLimiter({ tokensPerInterval: 1, interval: 50 })


const fetchWithTimeout: (timeout: number) => typeof fetch =
    (timeout: number) => async (resource, options) => {
        const controller = new AbortController()
        const id = setTimeout(() => controller.abort(), timeout)

        const response = await fetch(resource, {
            ...options,
            signal: controller.signal,
        })
        clearTimeout(id)

        return response
    }

const limitedFetch: typeof fetch = async (...props) => {
    await limiter.removeTokens(1)
    return await fetchWithTimeout(8000)(...props)
}



const findFullPersonProfile = async (
    webId: IriString,
    visited = new Set<IriString>(),
    response: SolidDataset[] = [],
    fail = true,
    iri = webId,
): Promise<SolidDataset[]> => {
    try {
        visited.add(iri)
        const dataset = await getSolidDataset(iri, { fetch: limitedFetch })
        const person = getThing(dataset, webId)
        if (person) {
            response.push(dataset)
            const same: string[] = getTermAll(person, owl.sameAs).map(a => a.value)
            const see: string[] = getTermAll(person, rdfs.seeAlso).map(a => a.value)

            for (const uri of [...same, ...see]) {
                console.log('extending', uri)
                if (!visited.has(uri))
                    await findFullPersonProfile(webId, visited, response, false, uri)
            }
        }
    } catch (e) {
        if (fail) throw e
    }
    return response
}



export const findPersonData = async (webId: IriString): Promise<PersonData> => {
    const data: PersonData = { webId: webId, name: '', friends: [] }
    if (webId) {
        const dataset = await findFullPersonProfile(webId)
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
                console.log("hol")
            }
            return data
        }, data)
        return data
    }

    return data;
}