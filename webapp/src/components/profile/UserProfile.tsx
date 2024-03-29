import {CombinedDataProvider, Image, Text, useSession} from "@inrupt/solid-ui-react";
import React, {useEffect, useState} from "react";
import {initReactI18next, useTranslation} from "react-i18next";
import "../../css/profile.css"
import {Avatar, Badge, Box, Button, Typography} from '@mui/material';
import {FOAF, VCARD} from "@inrupt/lit-generated-vocab-common";
import profilePhoto from "../../img/profile.png";

import Diversity3Icon from '@mui/icons-material/Diversity3';
import IconButton from "@mui/material/IconButton";


import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import i18n from "../../i18n";
import {findPersonData, PersonData} from "../pod/PODsInteraction";

i18n.use(initReactI18next)

function UserProfile() {
    const {session} = useSession();
    const [personData, setPersonData] = useState<PersonData>({webId: '', photo: '', name: '', friends: []})
    let {webId} = session.info;
    const [friends, setFriendList] = useState<PersonData[]>([]);
    const {t} = useTranslation();

    const [edit, setEdit] = useState(false)
    const handleEdit = () => {
        setEdit(!edit);
    };


    if (webId == null) {
        webId = "";
    }
    const dropdownTitle = (
        <span>
            <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
                <Text property={FOAF.name.iri.value} edit={edit} autosave/>
            </CombinedDataProvider>
        </span>
    );


    useEffect(() => {
        async function loadPersonData() {
            if (webId !== undefined) {
                const data = await findPersonData(session, webId);
                if (data) {
                    setPersonData(data);
                }
            }
        }
        loadPersonData().catch(error => console.log(error))
    }, [webId, session])

    useEffect(() => {
        async function fetchFriends() {
            if (personData.friends.length > 0) {
                const names = await Promise.all(
                    personData.friends.map((friend: string) => findPersonData(session, friend))
                );
                setFriendList(names);
            }
        }

        fetchFriends().catch(error => console.log(error))
    }, [personData.friends, session])

    function handleButtonClick() {
        window.open(webId, '_blank');
    }

    return (
        <div id="friends-configuration">
            <Box id="box">
                <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
                    <Avatar id="photoUser" sx={{width: 200, height: 200, mb: 2}}>
                        <Image property={VCARD.hasPhoto.iri.value} width={200} alt="Profile image"/>

                    </Avatar>
                    <IconButton onClick={handleButtonClick}>
                        <ContactEmergencyIcon/>{t("pod-profile")}
                    </IconButton>
                </CombinedDataProvider>
                <Typography variant="h4" gutterBottom textAlign="center">
                    {dropdownTitle}
                </Typography>

                <Box mt={4}>
                    <Button variant="contained" onClick={handleEdit}>
                        {edit ? t("confirm-name") : t("edit-name")}
                    </Button>
                </Box>
            </Box>
            <div id="friends-configuration-body">
                {friends.length > 0 ? (
                    <div id="friends-data">
                        <div id="friends-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>{t("friends")}</th>
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
                                                    <div className="friendName">{friend.name}</div>
                                                </CombinedDataProvider>

                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="friend-counter">
                            <Badge color="secondary" badgeContent={friends.length}>
                                <Diversity3Icon/>
                            </Badge>
                            <p>{t("have-friends")} {friends.length} {t("text-friend")}</p>
                        </div>
                    </div>
                ) : (
                    <div className="no-content" id="no-friends-profile">
                        <p>{t("notificationNoFriends")}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default UserProfile