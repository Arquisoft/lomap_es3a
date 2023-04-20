import {CombinedDataProvider, Image, useSession} from "@inrupt/solid-ui-react";
import React, {useEffect, useState} from "react";
import {findPersonData, PersonData} from "../pod/FriendsPOD";
import {useTranslation} from "react-i18next";
import "../../css/friends.css"
import Avatar from "@mui/material/Avatar";
import {VCARD} from "@inrupt/lit-generated-vocab-common";

function ManageFriends(){
    const { session } = useSession();
    const [personData, setPersonData] = useState<PersonData>({ webId: '',photo: '', name: '', friends: [] })
    const {webId} = session.info;
    const [friends, setFriendList] = useState<PersonData[]>([]);
    const [showButtonAdd,setShowButtonAdd] = useState(true)
    const { t } = useTranslation();




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

    return(
        <div id="friendsConfiguration" >
            <div id="friendsConfigurationBody">
                <h1>{t("friends")}</h1>
                { showButtonAdd ? (
                    <button onClick={showFormAddFriend}>Añadir amigo</button>
                ) : (
                    <div id="formAddFriend">

                    </div>
                )

                }

                <div id="friendsTable">
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
                                    <td><button>Dar permisos</button></td>
                                    <td><button>Eliminar</button></td>
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