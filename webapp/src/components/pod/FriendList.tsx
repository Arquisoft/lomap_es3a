import React, {useEffect, useState} from "react";
import {useSession} from "@inrupt/solid-ui-react";
import {findPersonData, PersonData} from "./FriendsPOD";


function FriendList(){
    const { session } = useSession();
    const [personData, setPersonData] = useState<PersonData>({ webId: '', name: '', friends: [] })
    const {webId} = session.info;
    const [friends, setFriendList] = useState<PersonData[]>([]);

    useEffect(() => {
        async function loadPersonData() {
            const data = webId !== undefined ? await findPersonData(webId) : undefined
            if(data){
                setPersonData(data)
            }
        }
        loadPersonData()

        async function fetchFriends() {
            const names = await Promise.all(
                personData.friends.map((friend) => findPersonData(friend))
            );
            setFriendList(names);

        }
        fetchFriends();


    }, [webId,session])

    return(
        <div id="friends" >
            <h2>Friends</h2>
            <div id="friendsList">
                {
                    friends.map(friend => (
                        <div key={friend.webId}>
                            <button>{friend.name}</button>
                        </div>
                    ))

                }
            </div>
        </div>
    )

}
export default FriendList