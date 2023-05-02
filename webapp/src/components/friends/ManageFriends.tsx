import {CombinedDataProvider, Image, useSession} from "@inrupt/solid-ui-react";
import React, {useEffect, useState} from "react";
import {
    addFriendToPod,
    changePermissions,
    findPersonData,
    PersonData,
    removeFriendFromPOD
} from "../pod/PODsInteraction";
import {initReactI18next, useTranslation} from "react-i18next";
import "../../css/friends.css"
import Avatar from "@mui/material/Avatar";
import {VCARD} from "@inrupt/lit-generated-vocab-common";
import Icon from "../../img/symbols/GOMapSymbol.png";
import Notification from "../Notification";
import profilePhoto from "../../img/profile.png";
import i18n from "../../i18n";

i18n.use(initReactI18next)

function ManageFriends() {
    const {session} = useSession();
    const [idp, setIdp] = useState("https://inrupt.net");
    const [error, setError] = useState(false)
    const [friendAdd, setFriendAdd] = useState(false)
    const [friendRemove, setFriendRemove] = useState(false)
    const [friendPermissions, setFriendPermissions] = useState(false)
    const [personData, setPersonData] = useState<PersonData>({webId: '', photo: '', name: '', friends: []})
    const [friends, setFriendList] = useState<PersonData[]>([]);
    const [showButtonAdd, setShowButtonAdd] = useState(true)
    const {t} = useTranslation();

    const providers = [
        {name: "Inrupt", value: "https://inrupt.net"},
        {name: "SolidCommunity", value: "https://solidcommunity.net"},
    ];

    useEffect(() => {
        async function loadPersonData() {
            if (session.info.webId !== undefined) {
                const data = await findPersonData(session, session.info.webId)
                if (data) {
                    setPersonData(data)
                }
            }
        }
        loadPersonData().catch(error => console.log(error))
    }, [session])

    useEffect(() => {
        async function fetchFriends() {
            if (personData.friends.length > 0) {
                const names = await Promise.all(
                    personData.friends.map((friend) => findPersonData(session, friend))
                );
                setFriendList(names);
            }
        }

        fetchFriends().catch(error => console.log(error))
    }, [personData, session])

    function showFormAddFriend() {
        setShowButtonAdd(false)
    }

    function handleCloseNotification() {
        setError(false)
        setFriendAdd(false)
        setFriendRemove(false)
        setFriendPermissions(false)
    }

    function changeProvider() {
        let provider = (document.getElementById("selectProviderFriend") as HTMLSelectElement).value;
        setIdp(provider)
    }

    async function removeFriend(friendWebId: string) {
        await removeFriendFromPOD(friendWebId, session.info.webId!)
        const data = await findPersonData(session, session.info.webId!)
        setPersonData(data)
        setFriendRemove(true)
    }

    async function addFriend() {
        let provider = idp
        let friendName = (document.getElementById("inputNameFriend") as HTMLInputElement).value
        let error = await addFriendToPod(provider, friendName, session.info.webId!, session)
        setError(error)
        if (!error) {
            const data = await findPersonData(session, session.info.webId!)
            setPersonData(data)
            setFriendAdd(true)
        }
    }

    async function givePermissions(friendWebId: string) {
        let webIdWithoutProfile = session.info.webId!.split("profile")[0]
        await changePermissions(webIdWithoutProfile, friendWebId, session)
        setFriendPermissions(true)
    }

    return (
        <div id="friendsConfiguration">
            <div id="friendsConfigurationBody">
                <h1>{t("friends")}</h1>
                {showButtonAdd ? (
                    <button onClick={showFormAddFriend} id="buttonAddFriend">{t("buttonAddFriend")}</button>
                ) : (
                    <div id="formAddFriend">
                        <div id="friendProvider">
                            <p>{t("provider")}</p>
                            <select onChange={changeProvider} id="selectProviderFriend">
                                <option value={providers[0].value}>{providers[0].name}</option>
                                <option value={providers[1].value}>{providers[1].name}</option>
                            </select>
                        </div>
                        <div id="friendName">
                            <p>{t("userName")}</p>
                            <input type="text" id="inputNameFriend" placeholder={t("placesNamePlaceholder") ?? ""}></input>
                        </div>
                        <div id="buttonAddFriendToPod">
                            <button onClick={() => addFriend().catch(error => console.log(error))}>{t("buttonAddFriend")}</button>
                        </div>
                    </div>
                )

                }
                {
                    personData.friends.length > 0 ?
                        <div id="friendsTable">
                            <table>
                                <thead>
                                <tr>
                                    <th scope="col">{t("friendName")}</th>
                                    <th scope="col">{t("friendPermissions")}</th>
                                    <th scope="col">{t("removeFriend")}</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    friends.filter(friend => friend !== undefined).map(friend => (
                                        <tr key={friend.webId}>
                                            <th scope="row">
                                                <div id="friendNamePhoto">
                                                    <CombinedDataProvider datasetUrl={friend.webId}
                                                                          thingUrl={friend.webId}>
                                                        <Avatar id="friendPhoto" alt="Friend photo"
                                                                sx={{width: 65, height: 65, mb: 2}}>
                                                            {
                                                                friend.photo !== '' &&
                                                                <Image property={VCARD.hasPhoto.iri.value} width={65}/>
                                                            }
                                                            {
                                                                friend.photo === '' &&
                                                                <img src={profilePhoto} width={65} alt={friend.name}/>
                                                            }
                                                        </Avatar>
                                                    </CombinedDataProvider>
                                                    {friend.name}
                                                </div>
                                            </th>
                                            <td>
                                                <button id="buttonPermissions"
                                                        onClick={() => givePermissions(friend.webId).catch(error => console.log(error))}>{t("buttonGivePermissions")}</button>
                                            </td>
                                            <td>
                                                <button id="buttonDelete"
                                                        onClick={() => removeFriend(friend.webId).catch(error => console.log(error))}>{t("buttonRemoveFriend")}</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                        :
                        <div className="no-content" id="noFriendsProfile">
                            <p>{t("notificationNoFriends")}</p>
                        </div>
                }
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