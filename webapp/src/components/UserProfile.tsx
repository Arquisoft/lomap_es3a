import React from 'react';
import {Avatar, Box, Button, Typography} from '@mui/material';
import {CombinedDataProvider, Image, Text, useSession} from "@inrupt/solid-ui-react";
import {FOAF, VCARD} from "@inrupt/lit-generated-vocab-common";


interface UserProfileProps {

}

const UserProfile: React.FC<UserProfileProps> = () => {

    const {session} = useSession();
    let {webId} = session.info;


    if (webId === undefined)
        webId = "";

    const dropdownTitle = (
        <span>
            <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
                <Text property={FOAF.name.iri.value} autosave/>
            </CombinedDataProvider>
        </span>
    );

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            px={2}
        >
            <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
                <Avatar sx={{width: 200, height: 200, mb: 2}}> <Image property={VCARD.hasPhoto.iri.value} width={200}/></Avatar>
            </CombinedDataProvider>
            <Typography variant="h4" gutterBottom textAlign="center">
                {dropdownTitle}
            </Typography>
            <Typography variant="h6" gutterBottom textAlign="center">
                @{"email"}
            </Typography>
            <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
                <Typography variant="body2" color="textSecondary" component="p"
                            style={{display: "flex", alignItems: "center"}}>
                    @{"Mas info"}
                </Typography>
            </CombinedDataProvider>
            <Box mt={4}>
                <Button variant="contained">Editar perfil</Button>
            </Box>

        </Box>


    );
};

export default UserProfile;
