import React, {useEffect, useState} from "react";
import {useSession} from "@inrupt/solid-ui-react";
import {findPersonData, FriendMaps, getMaps, PersonData} from "../../pod/PODsInteraction";
import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../../i18n";
import ReactDOM from "react-dom/client";
import MapView from "../MapView";
import Filter from "./Filter";
import {Collapse} from "react-bootstrap";
import {List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import MapIcon from '@mui/icons-material/Map';
import {v4 as uuidv4} from "uuid";


i18n.use(initReactI18next)

function FriendList(props: { setItem: Function,setSelectedMap:Function }) {
    const {session} = useSession();
    const [personData, setPersonData] = useState<PersonData>({webId: '', photo: '', name: '', friends: []})
    const {webId} = session.info;
    const {t} = useTranslation();
    const [friendsMaps, setFriendsMaps] = useState<FriendMaps[]>([]);
    const [open, setOpen] = useState<Record<string, boolean>>({});

    function handleClick(id: string )  {
        setOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
    };

    useEffect(() => {
        async function loadPersonData() {
            if (webId !== undefined) {
                const data = await findPersonData(session, webId)
                if (data) {
                    setPersonData(data)
                }
            }
        }

        loadPersonData().catch(error => console.log(error))
    }, [webId, session])

    useEffect(() => {
        async function fetchFriendsMaps(friends: PersonData[]) {
            let result = []
            for (const friend of friends) {
                let maps = await getMaps(friend.webId, session)
                const friendMaps: FriendMaps = {webId: friend.webId, name: friend.name, maps: maps}
                result.push(friendMaps)
            }
            setFriendsMaps(result)
        }

        async function fetchFriends() {
            if (personData.friends.length > 0) {
                const names = await Promise.all(
                    personData.friends.map((friend) => findPersonData(session, friend))
                );
                await fetchFriendsMaps(names);
            }
        }

        fetchFriends().catch(error => console.log(error))
    }, [personData.friends, session])


    function beautifyMapName(mapName: string, webId: string): string {
        let uri = webId.split("/").slice(0, 3).join("/").concat("/lomap/");
        let shortName = mapName.replace(uri, "").replace(".jsonld", "");
        return shortName.replace(shortName.charAt(0), shortName.charAt(0).toUpperCase()).trim();
    }

    function getMarkers(friendMap: string) {
        if (webId !== undefined) {
            const root = ReactDOM.createRoot(document.getElementById("mapView") as HTMLElement);
            root.render(<MapView lat={43.3548057} lng={-5.8534646} webId={[friendMap]}
                                 setItem={props.setItem}/>);
            const root2 = ReactDOM.createRoot(document.getElementById("filterDiv") as HTMLElement);
            root2.render(<Filter titleFilter={t("category")} nameFilter={"option"} usersWebId={[friendMap]}
                                 setItem={props.setItem}/>);
            props.setSelectedMap("")
        }
        const showMarkerPanel = document.getElementById("showMarkerPanel");
        if (showMarkerPanel !== null) {
            showMarkerPanel.style.width = "0";
        }
        const addMarkerPanel = document.getElementById("addMarkerPanel");
        if (addMarkerPanel !== null) {
            addMarkerPanel.style.width = "0";
        }
    }

    return (
        <div id="friends">
            <h2>{t("friends")}</h2>
            <div id="friendsList">
                {
                    friendsMaps.length > 0 ? (
                        <List>
                            {friendsMaps.map((friend) => (
                                <div key={uuidv4()}>
                                    <ListItemButton onClick={() => handleClick(friend.name)}>
                                        <ListItemIcon>
                                            <PersonIcon color="primary"/>
                                        </ListItemIcon>
                                        <ListItemText primary={friend.name}/>
                                        {open[friend.name] ? <ExpandLess/> : <ExpandMore/>}
                                    </ListItemButton>
                                    <Collapse in={open[friend.name]} timeout={5}>
                                        <List component="div" disablePadding>
                                            {friend.maps.length > 0 ? (
                                                friend.maps[0] !== "User Unauthorized" ? (
                                                    friend.maps.map((map) => (
                                                        <ListItemButton key={map} sx={{pl: 4}}
                                                                        onClick={() => getMarkers(map)}
                                                                        id="mapNameItem">
                                                            <ListItemIcon>
                                                                <MapIcon color="primary"/>
                                                            </ListItemIcon>
                                                            <ListItemText primary={beautifyMapName(map, friend.webId)}/>
                                                        </ListItemButton>
                                                    ))
                                                ) : (
                                                    <div id="noFriendPermissions">
                                                        <p>{t("notificationNoFriendPermissions")}</p>
                                                    </div>
                                                )
                                            ) : (
                                                <div id="noFriendMaps">
                                                    <p>{t("notificationNoFriendMaps")}</p>
                                                </div>
                                            )}
                                        </List>
                                    </Collapse>
                                </div>
                            ))}
                        </List>
                    ) : (
                        <div className="no-content" id="noFriends">
                            <p>{t("notificationNoFriends")}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )

}

export default FriendList
