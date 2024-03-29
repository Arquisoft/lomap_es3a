import React from "react";
import {Box, IconButton, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import GlobeComponent from "./Globe";
import {PersonCard} from "./PersonCard";
import "../../css/globe.css"
import CarlosImg from "../../img/CarlosDiez.jpg";
import OmarImg from "../../img/OmarImg.jpg";
import DavidImg from "../../img/DavidImg.jpg";
import RaulImg from "../../img/RaulImg.jpeg"
import {initReactI18next, useTranslation} from "react-i18next";
import Arquisoft from "../../img/Arquisoft.png";
import i18n from "../../i18n";

i18n.use(initReactI18next);




function AboutPage() {
    const {t} = useTranslation();

    const DeveloperBox = styled(Box)({
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: "10px",
    });

    const Carlos = {
        name: "Carlos Diez Fernández",
        image: CarlosImg,
        description: t("descriptionCarlos"),
        github: "uo284373",
    };

    const Raul = {
        name: "Raúl Fernández España",
        image: RaulImg,
        description: t("descriptionRaul"),
        github: "UO278036",
    };

    const Omar = {
        name: "Omar Teixeira González",
        image: OmarImg,
        description: t("descriptionOmar"),
        github: "Omitg24",
    };

    const David = {
        name: "David Warzynski Abril",
        image: DavidImg,
        description: t("descriptionDavid"),
        github: "UO278968",
    };

    return (
        <Box
            sx={{mx: "auto", maxWidth: "80%", px: 2, py: 0}}>
            <div id="globe">
                <GlobeComponent/>
            </div>
            <Typography variant="h1" align="center">{t("ourDevelopers")}</Typography>
            <Box>
                <Box
                    display="flex"
                    flexDirection={{xs: "column", sm: "row"}}
                    alignItems="stretch"
                    justifyContent="space-around"
                    mt={4}
                    sx={{flexGrow: 1}}
                >
                    <DeveloperBox mx={1}>
                        <PersonCard person={Carlos}/>
                    </DeveloperBox>

                    <DeveloperBox mx={1}>
                        <PersonCard person={Raul}/>
                    </DeveloperBox>

                    <DeveloperBox mx={1}>
                        <PersonCard person={Omar}/>
                    </DeveloperBox>

                    <DeveloperBox mx={1}>
                        <PersonCard person={David}/>
                    </DeveloperBox>
                </Box>
            </Box>
            <Box mt={2}
                 sx={{
                     backgroundColor: 'rgba(255, 255, 255, 0.6)',
                     borderRadius: '12px',
                     padding: '16px'
                 }}
            >
                <Box mt={6}>
                    <Typography variant="h4" align="center">
                        {t("aboutWeb")}
                    </Typography>
                    <Box mt={4}>
                        <Typography variant="body1" align="justify">
                            {t("aboutWebContent")}
                        </Typography>
                    </Box>
                </Box>


                <Box mt={6}>
                    <Typography variant="h4" align="center">
                        {t("aboutSubject")}
                    </Typography>
                    <Box mt={4}>
                        <Typography variant="body1" align="justify">
                            {t("aboutSubjectContent")}
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                    <IconButton
                        aria-label={`Arquisoft web`}
                        component="a"
                        href={'https://arquisoft.github.io/'}
                        target="_blank"
                        rel="noopener"
                    >
                        <img src={Arquisoft} alt="icono personalizado" style={{ width: '75px', height: '75px' }} />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}
export default AboutPage;