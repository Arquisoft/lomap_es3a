import React, {useEffect, useState} from "react";
import {useSession} from "@inrupt/solid-ui-react";
import {findPersonData, PersonData} from "./FriendsPOD";
import botonRojo from "../../img/botonRojo.png";
import botonVerde from "../../img/botonVerde.png";

function FriendList(){
    const { session } = useSession();
    const [personData, setPersonData] = useState<PersonData>({ webId: '', name: '', friends: [] })
    const {webId} = session.info;
    const [friends, setFriendList] = useState<PersonData[]>([]);

    useEffect(() => {
        async function loadPersonData() {
            if (webId !== undefined) {
                const data = await findPersonData(session,webId)
                if(data){
                    setPersonData(data)
                }
            }
        }
        async function fetchFriends() {
            if (personData.friends.length > 0) {
                const names = await Promise.all(
                    personData.friends.map((friend) => findPersonData(session,friend))
                );
                setFriendList(names);
            }
        }

        loadPersonData()
        fetchFriends();


    }, [webId,session,personData.friends])

    function getMarkers(id:string){
        (document.getElementById(id) as HTMLImageElement).src = botonVerde;
    }

    return(
        <div id="friends" >
            <h2>Friends</h2>
            <div id="friendsList">
                {
                    friends.map(friend => (
                        <div key={friend.webId}>
                            <button onClick={() =>getMarkers("button-"+friend.webId)}>{friend.name} <img id={"button-"+friend.webId} src={botonRojo} alt="botonRojo" width={15} height={15}/></button>
                        </div>
                    ))

                }
            </div>
        </div>
    )

}
export default FriendList