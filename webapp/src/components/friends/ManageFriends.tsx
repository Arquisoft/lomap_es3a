import {CombinedDataProvider, Image, useSession} from "@inrupt/solid-ui-react";
import React, {useEffect, useState} from "react";
import {addFriendToPod, findPersonData, PersonData, removeFriendFromPOD} from "../pod/FriendsPOD";
import {useTranslation} from "react-i18next";
import "../../css/friends.css"
import Avatar from "@mui/material/Avatar";
import {VCARD} from "@inrupt/lit-generated-vocab-common";



function ManageFriends(){
    const { session } = useSession();
    const [idp, setIdp] = useState("https://inrupt.net");
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

    function changeProvider(){
        let provider = (document.getElementById("selectProvider") as HTMLSelectElement).value;
        setIdp(provider)
    }

    async function removeFriend(friendWebId:string){
        await removeFriendFromPOD(friendWebId,webId!)
        const data = await findPersonData(session,webId!)
        setPersonData(data)
    }

    async function addFriend(){
        let provider = idp
        let friendName = (document.getElementById("inputNameFriend") as HTMLInputElement).value
        await addFriendToPod(provider,friendName,webId!)
        const data = await findPersonData(session,webId!)
        setPersonData(data)
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
                                    <td><button id="buttonPermissions">Dar permisos</button></td>
                                    <td><button id="buttonDelete" onClick={() => removeFriend(friend.webId)}>Eliminar</button></td>
                                </tr>
                        ))
                    }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ManageFriends