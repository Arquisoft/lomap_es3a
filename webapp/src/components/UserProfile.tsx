import {CombinedDataProvider, Image, useSession} from "@inrupt/solid-ui-react";
import React, {useEffect, useState} from "react";
import {addFriendToPod, changePermissions, findPersonData, PersonData, removeFriendFromPOD} from "./pod/FriendsPOD";
import {useTranslation} from "react-i18next";
import "../css/profile.css"
import Avatar from "@mui/material/Avatar";
import {VCARD} from "@inrupt/lit-generated-vocab-common";
import Icon from "../img/symbols/GOMapSymbol.png";
import Notification from "./Notification";
import profilePhoto from "../img/profile.png";



function ManageFriends(){
    const { session } = useSession();
    const [idp, setIdp] = useState("https://inrupt.net");
    const [error,setError] = useState(false)
    const [friendAdd, setFriendAdd] = useState(false)
    const [friendRemove, setFriendRemove] = useState(false)
    const [friendPermissions,setFriendPermissions] = useState(false)
    const [personData, setPersonData] = useState<PersonData>({ webId: '',photo: '', name: '', friends: [] })
    const {webId} = session.info;
    const [friends, setFriendList] = useState<PersonData[]>([]);
    const [showButtonAdd,setShowButtonAdd] = useState(true)
    const { t } = useTranslation();

    const providers = [
        { name: "Inrupt", value: "https://inrupt.net" },
        { name: "SolidCommunity", value: "https://solidcommunity.net" },
    ];


    useEffect(() => {
        async function loadPersonData() {
            if (webId !== undefined) {
                const data = await findPersonData(session,webId)
                if(data){
                    setPersonData(data)
                }
            }
        }

        loadPersonData()
    }, [webId,session])

    useEffect(() => {
        async function fetchFriends() {
            if (personData.friends.length > 0) {
                const names = await Promise.all(
                    personData.friends.map((friend) => findPersonData(session,friend))
                );
                setFriendList(names);
            }
        }
        fetchFriends()
    }, [personData.friends, session])

    function handleCloseNotification(){
        setError(false)
        setFriendAdd(false)
        setFriendRemove(false)
        setFriendPermissions(false)
    }


    return(
        <div id="friends-configuration">
            <div id="friends-configuration-body">
                <h1>{t("friends")}</h1>
                {friends.length > 0 ? (
                    <div id="friends-table">
                        <table>
                            <thead>
                            <tr>
                                <th>{t("friendName")}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {friends.map((friend) => (
                                <tr key={friend.webId}>
                                    <td>
                                        <div id="friend-name-photo">
                                            <CombinedDataProvider datasetUrl={friend.webId} thingUrl={friend.webId}>
                                                <div className="friend-photo">
                                                    {friend.photo !== "" ? (
                                                        <Image property={VCARD.hasPhoto.iri.value} width={65}/>
                                                    ) : (
                                                        <img src={profilePhoto} width={65} alt={friend.name}/>
                                                    )}
                                                </div>
                                            </CombinedDataProvider>
                                            <div className="friendName">{friend.name}</div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="no-content" id="no-friends-profile">
                        <p>{t("notificationNoFriends")}</p>
                    </div>
                )}
            </div>

            {error && (
                <Notification
                    title={t("notificationAddFriendErrorTitle")}
                    message={t("notificationAddFriendError")}
                    time={t("notificationTime")}
                    icon={Icon}
                    onClose={handleCloseNotification}
                />
            )}
            {friendAdd && (
                <Notification
                    title={t("notificationAddFriendTitle")}
                    message={t("notificationAddFriend")}
                    time={t("notificationTime")}
                    icon={Icon}
                    onClose={handleCloseNotification}
                />
            )}
            {friendRemove && (
                <Notification
                    title={t("notificationRemoveFriendTitle")}
                    message={t("notificationRemoveFriend")}
                    time={t("notificationTime")}
                    icon={Icon}
                    onClose={handleCloseNotification}
                />
            )}
            <div className="friend-counter">
                <p>Tienes {friends.length} amigos</p>
            </div>
            {friendPermissions && (
                <Notification
                    title={t("notificationPermissionsFriendTitle")}
                    message={t("notificationPermissionsFriend")}
                    time={t("notificationTime")}
                    icon={Icon}
                    onClose={handleCloseNotification}
                />
            )}
        </div>
    )
}
export default ManageFriends