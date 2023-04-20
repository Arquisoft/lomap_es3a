import {useSession} from "@inrupt/solid-ui-react";
import React, {useEffect, useState} from "react";
import {findPersonData, PersonData} from "../pod/FriendsPOD";
import {useTranslation} from "react-i18next";
import botonRojo from "../../img/botonRojo.png";

function ManageFriends(){
    const { session } = useSession();
    const [personData, setPersonData] = useState<PersonData>({ webId: '',photo: '', name: '', friends: [] })
    const {webId} = session.info;
    const [friends, setFriendList] = useState<PersonData[]>([]);
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

    return(
        <div id="friends" >
            <h2>{t("friends")}</h2>
            <div id="friendsList">
                <table>
                {
                    friends.map(friend => (
                            <tr key={friend.webId}>
                                <td>friend.name</td>
                            </tr>
                    ))
                }
                </table>
            </div>
        </div>
    )
}
export default ManageFriends