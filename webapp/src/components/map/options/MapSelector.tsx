import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {useSession} from "@inrupt/solid-ui-react";
import {checkIfFolderExists, createNewMap, getMaps} from "../../pod/PODsInteraction";
import ReactDOM from "react-dom/client";
import MapView from "../MapView";
import Notification from "../../Notification";
import Icon from "../../../img/symbols/GOMapSymbol.png";
import Filter from "./Filter";


function MapSelector(props: { setItem: Function,setSelectedMap:Function,selectedMap:string }) {
    const {t} = useTranslation();
    const [maps, setMaps] = useState<string[]>([])
    const {session} = useSession()
    const [showNotification, setShowNotification] = useState(false);
    const [errorEmptyName, setErrorEmptyName] = useState(false)
    const [errorSameName, setErrorSameName] = useState(false)


    useEffect(() => {
        async function fetchMaps() {
            await checkIfFolderExists(session.info.webId!,session);

            const mapsFromPOD = session.info.webId !== "" ? await getMaps(session.info.webId!, session) : undefined;
            if (mapsFromPOD) {
                setMaps(mapsFromPOD);
                props.setSelectedMap(mapsFromPOD[0])
                render(mapsFromPOD[0], "mapView")
                render(mapsFromPOD[0], "filter")
            }
        }

        fetchMaps()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session.info.webId, session]);

    function createNotification() {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 4000);
    }

    const handleCloseNotification = () => {
        setShowNotification(false);
        setErrorEmptyName(false)
        setErrorSameName(false)
    };

    function render(route: string, element: string) {
        if (element === "filter") {
            const root = ReactDOM.createRoot(document.getElementById("filterDiv") as HTMLElement);
            root.render(<Filter titleFilter={t("category")} nameFilter={"option"} usersWebId={[route]}
                                setItem={props.setItem}/>);
        } else if (element === "mapView") {
            const root = ReactDOM.createRoot(document.getElementById("mapView") as HTMLElement);
            root.render(<MapView lat={43.3548057} lng={-5.8534646} webId={[route]}
                                 setItem={props.setItem}/>);
        }
    }

    function beautifyMapName(mapName: string): string {
        let uri = session.info.webId!.split("/").slice(0, 3).join("/").concat("/lomap/");
        let shortName = mapName.replace(uri, "").replace(".jsonld", "");
        return shortName.replace(shortName.charAt(0), shortName.charAt(0).toUpperCase()).replace("%20", "");
    }

    function changeMap() {
        let select = (document.getElementById("selectMap") as HTMLSelectElement).value
        props.setSelectedMap(select);
        render(select, "mapView");
        render(select, "filter");
        const showMarkerPanel = document.getElementById("showMarkerPanel");
        if (showMarkerPanel !== null) {
            showMarkerPanel.style.width = "0";
        }
        const addMarkerPanel = document.getElementById("addMarkerPanel");
        if (addMarkerPanel !== null) {
            addMarkerPanel.style.width = "0";
        }
    }

    async function createMap() {
        let mapName = (document.getElementById("newMapTitle") as HTMLInputElement).value
        if (mapName.trim() !== "") {
            let existsMap = maps.filter(map => beautifyMapName(map)===beautifyMapName(mapName))
            if(existsMap.length === 0){
                await createNewMap(session, mapName)
                await getMaps(session.info.webId!, session).then(newMaps => {
                    setMaps(newMaps)
                    let uri = session.info.webId!.split("/").slice(0, 3).join("/").concat("/lomap/");
                    let fileUrl = (uri + mapName + ".jsonld").trim();
                    (document.getElementById("newMapTitle") as HTMLInputElement).value = ""
                    createNotification();
                    render(fileUrl, "mapView");
                    render(fileUrl, "filter");
                    props.setSelectedMap(fileUrl);
                })
                const showMarkerPanel = document.getElementById("showMarkerPanel");
                if (showMarkerPanel !== null) {
                    showMarkerPanel.style.width = "0";
                }
                const addMarkerPanel = document.getElementById("addMarkerPanel");
                if (addMarkerPanel !== null) {
                    addMarkerPanel.style.width = "0";
                }
            }else{
                setErrorSameName(true)
            }
        } else {
            setErrorEmptyName(true)
        }

    }

    return (
        <div id="differentMaps">
            <div id="mapSelector">
                <h2>{t("mapSelector")}</h2>
                {
                    (maps.length > 0) ?
                        <select value={props.selectedMap} onChange={changeMap} id="selectMap">
                            <option hidden={true}></option>
                            {
                                maps.map(map => (
                                    <option value={map} key={map}>{beautifyMapName(map)}</option>
                                ))
                            }
                        </select>
                        :
                        <p className="no-content">{t("notificationNoMaps")}</p>
                }

            </div>
            <div id="mapCreator">
                <h2>{t("createNewMap")}</h2>
                <input type="text" id="newMapTitle" placeholder={t("placesNamePlaceholder") ?? ""}/>
                <button id="createButton" onClick={createMap}>

                    {t("create")}
                </button>
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
            {
                errorEmptyName &&
                (
                    <Notification
                        title={t("notificationEmptyNameMapTitle")}
                        message={t("notificationEmptyNameMap")}
                        time={t("notificationTime")}
                        icon={Icon}
                        onClose={handleCloseNotification}
                    />
                )
            }
            {
                errorSameName &&
                (
                    <Notification
                        title={t("notificationSameNameMapTitle")}
                        message={t("notificationSameNameMap")}
                        time={t("notificationTime")}
                        icon={Icon}
                        onClose={handleCloseNotification}
                    />
                )
            }
        </div>
    )
}

export default MapSelector