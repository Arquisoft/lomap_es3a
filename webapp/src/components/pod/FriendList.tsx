import React, {useEffect, useState} from "react";
import {useSession} from "@inrupt/solid-ui-react";
import {findPersonData, PersonData} from "./FriendsPOD";
import botonRojo from "../../img/botonRojo.png";
import botonVerde from "../../img/botonVerde.png";
import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../i18n";

i18n.use(initReactI18next)

function FriendList(){
    const { session } = useSession();
    const [personData, setPersonData] = useState<PersonData>({ webId: '', name: '', friends: [] })
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

    function getMarkers(id:string){
        (document.getElementById(id) as HTMLImageElement).src = botonVerde;

    }

    // async function friendsAclPermission(webId:string,session:Session) {
    //     let url = webId.replace("profile/card#me","");
    //     let urlContainer = url+"private/locations.json";
    //
    //     try {
    //         let file = await solid.getFile(
    //             url,
    //             { fetch: session.fetch }
    //         );
    //
    //         let resourceAcl = solid.createAcl(file);
    //
    //         const updatedAcl = solid.setAgentResourceAccess(
    //             resourceAcl,
    //             personData.friends[1],
    //             { read: true, append: false, write: false, control: false }
    //         );
    //
    //         await solid.saveAclFor(file, updatedAcl, { fetch: session.fetch });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return(
        <div id="friends" >
            <h2>{t("friends")}</h2>
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