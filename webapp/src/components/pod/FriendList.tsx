import React, {useEffect, useState} from "react";
import {useSession} from "@inrupt/solid-ui-react";
import {findPersonData, PersonData} from "./FriendsPOD";
import botonRojo from "../../img/botonRojo.png";
import botonVerde from "../../img/botonVerde.png";
import {
    createAclFromFallbackAcl, getResourceAcl,
    getSolidDatasetWithAcl,
    hasAccessibleAcl,
    hasFallbackAcl,
    hasResourceAcl, saveAclFor, setAgentResourceAccess,setAgentDefaultAccess
} from "@inrupt/solid-client";
import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../i18n";
import ReactDOM from "react-dom/client";
import MapView from "../map/MapView";

i18n.use(initReactI18next)

function FriendList(){
    const { session } = useSession();
    const [personData, setPersonData] = useState<PersonData>({ webId: '', name: '', friends: [] })
    const {webId} = session.info;
    const [friends, setFriendList] = useState<PersonData[]>([]);
    const { t } = useTranslation();
    let friendSelected : string[] = [];

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

    function getMarkers(id:string,friendWebId:string){
        if(webId!==undefined){
            let webIdFriend = friendWebId.slice(0, -15) + 'private/locations.json'
            let webIdUser = webId.slice(0, -15) + 'private/locations.json'
            if(friendSelected.indexOf(webIdFriend)==-1){
                (document.getElementById(id) as HTMLImageElement).src = botonVerde;
                if(friendSelected.indexOf(webIdUser)!=-1){
                    friendSelected.pop()
                }
                friendSelected.push(webIdFriend)
                let target = webId.split("profile")[0]
                changePermissions(target,friendWebId);
                const root = ReactDOM.createRoot(document.getElementById("mapView") as HTMLElement);
                root.render(<MapView lat={43.3548057} lng={-5.8534646} webId={friendSelected}/>);
            }else{
                (document.getElementById(id) as HTMLImageElement).src = botonRojo;
                friendSelected = friendSelected.filter(friend => friend != webIdFriend)
                if(friendSelected.length==0){
                    friendSelected.push(webIdUser);
                }
                const root = ReactDOM.createRoot(document.getElementById("mapView") as HTMLElement);
                root.render(<MapView lat={43.3548057} lng={-5.8534646} webId={friendSelected}/>);
            }

        }
    }

    async function changePermissions(webId:string,friendWebId:string){
        // Fetch the SolidDataset and its associated ACLs, if available:
        const myDatasetWithAcl = await getSolidDatasetWithAcl(webId+"private/",{fetch:session.fetch});

        // Obtain the SolidDataset's own ACL, if available,
        // or initialise a new one, if possible:
        let resourceAcl;
        if (!hasResourceAcl(myDatasetWithAcl)) {
            if (!hasAccessibleAcl(myDatasetWithAcl)) {
                throw new Error(
                    "The current user does not have permission to change access rights to this Resource."
                );
            }
            if (!hasFallbackAcl(myDatasetWithAcl)) {
                throw new Error(
                    "The current user does not have permission to see who currently has access to this Resource."
                );
                // Alternatively, initialise a new empty ACL as follows,
                // but be aware that if you do not give someone Control access,
                // **nobody will ever be able to change Access permissions in the future**:
                // resourceAcl = createAcl(myDatasetWithAcl);
            }
            resourceAcl = createAclFromFallbackAcl(myDatasetWithAcl);
        } else {
            resourceAcl = getResourceAcl(myDatasetWithAcl);
        }

        // Give someone Control access to the given Resource:
        let updatedAcl = setAgentResourceAccess(
            resourceAcl,
            friendWebId,
            { read: true, append: false, write: false, control: false }
        );
        updatedAcl = setAgentDefaultAccess(
            updatedAcl,
            friendWebId,
            { read: true, append: false, write: false,control:false }
        )


        // Now save the ACL:
        await saveAclFor(myDatasetWithAcl, updatedAcl,{fetch:session.fetch});
    }

    return(
        <div id="friends" >
            <h2>{t("friends")}</h2>
            <div id="friendsList">
                {
                    friends.map(friend => (
                        <div key={friend.webId}>
                            <button onClick={() =>getMarkers("button-"+friend.webId,friend.webId)}>{friend.name} <img id={"button-"+friend.webId} src={botonRojo} alt="botonRojo" width={15} height={15}/></button>
                        </div>
                    ))

                }
            </div>
        </div>
    )

}
export default FriendList