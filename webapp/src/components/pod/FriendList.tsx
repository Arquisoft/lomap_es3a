import React, {useEffect, useState} from "react";
import {useSession} from "@inrupt/solid-ui-react";
import {findPersonData, FriendMaps, getMaps, PersonData} from "./FriendsPOD";
import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../i18n";
import ReactDOM from "react-dom/client";
import MapView from "../map/MapView";
import Filter from "../map/options/Filter";
import {Dropdown} from "react-bootstrap";

i18n.use(initReactI18next)

function FriendList(props: {setItem : Function}){
    const { session } = useSession();
    const [personData, setPersonData] = useState<PersonData>({ webId: '',photo: '', name: '', friends: [] })
    const {webId} = session.info;
    const [friends, setFriendList] = useState<PersonData[]>([]);
    const {t} = useTranslation();
    let friendSelected: string[] = [];
    const [friendsMaps,setFriendsMaps] = useState<FriendMaps[]>([]);


    useEffect(() => {
        async function loadPersonData() {
            if (webId !== undefined) {
                const data = await findPersonData(session, webId)
                if (data) {
                    setPersonData(data)
                }
            }
        }

        loadPersonData()
    }, [webId, session])

    useEffect(() => {
        async function fetchFriends() {
            if (personData.friends.length > 0) {
                const names = await Promise.all(
                    personData.friends.map((friend) => findPersonData(session, friend))
                );
                setFriendList(names);
                fetchFriendsMaps(names);
            }
        }
        fetchFriends()
    }, [personData.friends, session])

    async function fetchFriendsMaps(friends:PersonData[]){
        let result = []
        for(const friend of friends){
            let maps = await getMaps(friend.webId,session)
            const friendMaps : FriendMaps = {webId: friend.webId,name:friend.name,maps:maps}
            result.push(friendMaps)
        }
        setFriendsMaps(result)
    }

    function beautifyMapName(mapName: string,webId:string): string {
        let uri = webId.split("/").slice(0, 3).join("/").concat("/private/");
        let shortName = mapName.replace(uri, "").replace(".jsonld", "");
        return shortName.replace(shortName.charAt(0), shortName.charAt(0).toUpperCase()).replace("%20", "");
    }

    function getMarkers(friendMap: string) {
        if (webId !== undefined) {
            const root = ReactDOM.createRoot(document.getElementById("mapView") as HTMLElement);
            root.render(<MapView lat={43.3548057} lng={-5.8534646} webId={[friendMap]}
                                 setItem={props.setItem}/>);
            const root2 = ReactDOM.createRoot(document.getElementById("filterDiv") as HTMLElement);
            root2.render(<Filter titleFilter={t("category")} nameFilter={"option"} usersWebId={[friendMap]}
                                setItem={props.setItem}/>);
        }
    }

    return (
        <div id="friends">
            <h2>{t("friends")}</h2>
            <div id="friendsList">
                {
                    friendsMaps.map(friend => (
                        <div key={friend.webId}>
                            <Dropdown className="dropdown">
                                <Dropdown.Toggle className="dropdown-toggle-friend">
                                    {friend.name}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {
                                        friend.maps.map(map => (
                                            <div className="dropdown-item" key={map}>
                                                <Dropdown.Item onClick={() => getMarkers(map)}>
                                                    {beautifyMapName(map,friend.webId)}
                                                </Dropdown.Item>
                                                <button onClick={() => getMarkers(map)}>Mostrar mapa</button>
                                            </div>
                                        ))
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    ))

                }
            </div>
        </div>
    )

}
export default FriendList