import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {useSession} from "@inrupt/solid-ui-react";
import {createNewMap, getMaps} from "../../pod/FriendsPOD";
import ReactDOM from "react-dom/client";
import MapView from "../MapView";
import Notification from "../../Notification";
import Icon from "../../../img/symbols/GOMapSymbol.png";
import Filter from "./Filter";


function MapSelector(props: {setItem: Function }){
    const {t} = useTranslation();
    const[maps,setMaps] = useState<string[]>([])
    const[selectedMap,setSelectedMap] = useState("")
    const {session} = useSession()
    const [showNotification, setShowNotification] = useState(false);


    useEffect(() => {
        async function fetchMaps() {
            const mapsFromPOD = session.info.webId !== "" ? await getMaps(session.info.webId!,session) : undefined;
            if (mapsFromPOD) {
                setMaps(mapsFromPOD);
                setSelectedMap(mapsFromPOD[0])
                render(mapsFromPOD[0],"mapView")
                render(mapsFromPOD[0],"filter")
            }
        }
        fetchMaps()
    }, [session.info.webId,session]);

    function createNotification() {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 4000); // hide notification after 5 seconds
    }

    const handleCloseNotification = () => {
        setShowNotification(false);
    };

    function render(route:string,element:string){
        if(element==="filter"){
            const root = ReactDOM.createRoot(document.getElementById("mapView") as HTMLElement);
            root.render(<MapView lat={43.3548057} lng={-5.8534646} webId={[route]}
                                 setItem={props.setItem}/>);
        }else if(element==="mapView"){
            const root = ReactDOM.createRoot(document.getElementById("filterDiv") as HTMLElement);
            root.render(<Filter titleFilter={t("category")} nameFilter={"option"} usersWebId={[route]}
                                 setItem={props.setItem}/>);
        }
    }
    function beautifyMapName(mapName: string): string {
        let uri = session.info.webId!.split("/").slice(0, 3).join("/").concat("/private/");
        let shortName = mapName.replace(uri, "").replace(".jsonld", "");
        return shortName.replace(shortName.charAt(0), shortName.charAt(0).toUpperCase()).replace("%20", "");
    }
    function changeMap(){
        let select = (document.getElementById("selectMap") as HTMLSelectElement).value
        setSelectedMap(select);
        render(select,"mapView");
        render(select,"filter");
        const mapNameItems = document.querySelectorAll('[id="mapNameItem"]');
        mapNameItems.forEach(item => {
            item.setAttribute('aria-selected', 'false');
            item.classList.remove(item.classList.item(1)!);
        });
    }
    async function createMap(){
        let mapName = (document.getElementById("newMapTitle")as HTMLInputElement).value
        await createNewMap(session,mapName)
        await getMaps(session.info.webId!,session).then(newMaps =>{
            setMaps(newMaps)
            let uri = session.info.webId!.split("/").slice(0, 3).join("/").concat("/private/");
            let fileUrl = (uri + mapName+".jsonld").trim();
            (document.getElementById("newMapTitle") as HTMLInputElement).value=""
            createNotification();
            render(fileUrl,"mapView");
            render(fileUrl,"filter");
            setSelectedMap(fileUrl);
        })

    }

    return(
        <div id="differentMaps">
            <div id="mapSelector">
                <h2>{t("mapSelector")}</h2>
                {
                    (maps.length > 0) ?
                        <select value={selectedMap} onChange={changeMap} id="selectMap">
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
                <button id="createButton" onClick={createMap}>{t("create")}</button>
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
    )
}
export default MapSelector