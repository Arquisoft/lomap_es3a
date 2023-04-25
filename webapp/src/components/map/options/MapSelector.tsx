import i18n from "../../../i18n";
import {initReactI18next, useTranslation} from "react-i18next";
import {useSession} from "@inrupt/solid-ui-react";
import React, {useEffect, useState} from "react";
import {Session} from "@inrupt/solid-client-authn-browser";
import {getContainedResourceUrlAll, getSolidDataset, overwriteFile} from "@inrupt/solid-client";
import {v4 as uuidv4} from "uuid";
import Notification from "../../Notification";
import Icon from "../../../img/symbols/GOMapSymbol.png";
import ReactDOM from "react-dom/client";
import MapView from "../MapView";

i18n.use(initReactI18next)

function MapSelector(props: {setItem: Function }) {
    const {t} = useTranslation();

    const {session} = useSession();

    const [mapName, setMapName] = useState("");
    const [selectedMap, setSelectedMap] = useState("");
    const [maps, setMaps] = useState<string[]>([]);
    const [uriDirectory, setUriDirectory] = useState("");
    const [showNotification, setShowNotification] = useState(false);

    function checkSession(session: Session): boolean {
        if (session === undefined || session === null) {
            return false;
        }
        if (session.info === undefined || session.info === null) {
            return false;
        }
        return !(session.info.webId === undefined || session.info.webId === null || session.info.webId === "");

    }

    const handleCloseNotification = () => {
        setShowNotification(false);
    };

    function createNotification() {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 4000); // hide notification after 5 seconds
    }

    async function getMaps(): Promise<string[]> {
        if (session.info.webId === undefined || session.info.webId === null || session.info.webId === "") {
            return [];
        }
        let uri = session.info.webId.split("/").slice(0, 3).join("/").concat("/private/");
        setUriDirectory(uri);
        let dataset = await getSolidDataset(uri, {fetch: session.fetch});
        return getContainedResourceUrlAll(dataset);
    }

    async function fetchMaps() {
        const mapsFromPOD = session.info.webId !== "" ? await getMaps() : undefined;
        if (mapsFromPOD) {
            setMaps(mapsFromPOD);
            setSelectedMap(mapsFromPOD[0])
        }
        return "Fetching maps...";
    }

    useEffect(() => {
        fetchMaps().then(r => console.log(r));
    }, [session]);

    function beautifyMapName(mapName: string): string {
        let shortName = mapName.replace(uriDirectory, "").replace(".jsonld", "");
        return shortName.replace(shortName.charAt(0), shortName.charAt(0).toUpperCase()).replace("%20", "");
    }

    async function createNewMap() {
        if (checkSession(session)) {
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
                    let fileUrl = (uriDirectory + file.name).trim();
                    await overwriteFile(
                        fileUrl,
                        file,
                        {contentType: file.type, fetch: session.fetch}
                    );
                    await fetchMaps();
                    let mapCreated = maps.filter(m => beautifyMapName(m) === map.name.replace(map.name.charAt(0), map.name.charAt(0).toUpperCase()).replace("%20", ""))
                    setSelectedMap(mapCreated[0])
                    createNotification();
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }

    function changeSelectMap(){
        let select = (document.getElementById("selectMap") as HTMLSelectElement).value
        setSelectedMap(select);
        const root = ReactDOM.createRoot(document.getElementById("mapView") as HTMLElement);
        root.render(<MapView lat={43.3548057} lng={-5.8534646} webId={[select]}
                             setItem={props.setItem}/>);
    }

    function updateMap() {

    }

    return (
        <div>
            <div>
                <h2>{t("mapSelector")}</h2>
                {
                    (maps.length > 0) ?
                        <select value={selectedMap} id="selectMap" onChange={changeSelectMap}>
                            {
                                maps.map(m => <option key={m} value={m}> {beautifyMapName(m)} </option>)
                            }
                        </select>
                        :
                        <p className="no-content">You don't have created maps</p>
                }
            </div>
            <div>
                <h2>{t("createNewMap")}</h2>
                <form id="newMapButtonPanel">
                    <input type="text" id="newMapTitle" placeholder={t("placesNamePlaceholder") ?? ""}
                           onChange={(e) => {
                               setMapName(e.target.value)
                           }} value={mapName} required/>
                    <input type="button" id="createButton" value={t("create") ?? ""} onClick={createNewMap}/>
                </form>
            </div>
            {
                showNotification &&
                (
                    <Notification
                        title={t("notificationMapAdded")}
                        message={t("notificationMessageMap")}
                        time={t("notificationTime")}
                        icon={Icon}
                        onClose={handleCloseNotification}
                    />
                )
            }
        </div>
    );
}

export default MapSelector;