import {CombinedDataProvider, Image, useSession} from "@inrupt/solid-ui-react";
import React, {useEffect, useState} from "react";
import {addFriendToPod, changePermissions, findPersonData, PersonData, removeFriendFromPOD} from "../pod/FriendsPOD";
import {useTranslation} from "react-i18next";
import "../../css/friends.css"
import Avatar from "@mui/material/Avatar";
import {VCARD} from "@inrupt/lit-generated-vocab-common";
import Icon from "../../img/symbols/GOMapSymbol.png";
import Notification from "../Notification";



function ManageFriends(){
    const { session } = useSession();
    const [idp, setIdp] = useState("https://inrupt.net");
    const [error,setError] = useState(false)
    const [friendAdd, setFriendAdd] = useState(false)
    const [friendRemove, setFriendRemove] = useState(false)
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

    function showFormAddFriend(){
        setShowButtonAdd(false)
    }

    function handleCloseNotification(){
        setError(false)
        setFriendAdd(false)
        setFriendRemove(false)
    }

    function changeProvider(){
        let provider = (document.getElementById("selectProvider") as HTMLSelectElement).value;
        setIdp(provider)
    }

    async function removeFriend(friendWebId:string){
        await removeFriendFromPOD(friendWebId,webId!)
        const data = await findPersonData(session,webId!)
        setPersonData(data)
        setFriendRemove(true)
    }

    async function addFriend(){
        let provider = idp
        let friendName = (document.getElementById("inputNameFriend") as HTMLInputElement).value
        let error = await addFriendToPod(provider,friendName,webId!,session)
        setError(error)
        if(!error){
            const data = await findPersonData(session,webId!)
            setPersonData(data)
            setFriendAdd(true)
        }
    }

    async function givePermissions(friendWebId:string){
        let webIdWithoutProfile = webId!.split("profile")[0]
        await changePermissions(webIdWithoutProfile,friendWebId,session)
    }

    return(
        <div id="friendsConfiguration" >
            <div id="friendsConfigurationBody">
                <h1>{t("friends")}</h1>
                { showButtonAdd ? (
                    <button onClick={showFormAddFriend} id="buttonAddFriend">Añadir amigo</button>
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
                            <p>Introduce nombre usuario:</p>
                            <input type="text" id="inputNameFriend"></input>
                        </div>
                        <div id="buttonAddFriendToPod">
                            <button onClick={addFriend}>Añadir amigo</button>
                        </div>
                    </div>
                )

                }

                <div id="friendsTable" >
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Dar permisos</th>
                                <th scope="col">Eliminar amigo</th>
                            </tr>
                        </thead>
                        <tbody>
                    {
                        friends.map(friend => (
                                <tr key={friend.webId}>
                                    <th scope="row">
                                        <div id="friendNamePhoto">
                                            <CombinedDataProvider datasetUrl={friend.webId} thingUrl={friend.webId}>
                                                <Avatar id="friendPhoto" alt="Remy Sharp" sx={{ width: 65, height: 65, mb: 2 }}><Image property={VCARD.hasPhoto.iri.value} width={65}/></Avatar>
                                            </CombinedDataProvider>
                                            {friend.name}
                                        </div>
                                    </th>
                                    <td><button id="buttonPermissions" onClick={() => givePermissions(friend.webId)}>Dar permisos</button></td>
                                    <td><button id="buttonDelete" onClick={() => removeFriend(friend.webId)}>Eliminar</button></td>
                                </tr>
                        ))
                    }
                        </tbody>
                    </table>
                </div>
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
        </div>
    )
}
export default ManageFriends