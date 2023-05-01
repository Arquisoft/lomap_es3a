import React from "react";
import {Box, Typography, Avatar, Card, CardMedia, CardContent, CardActions, Button, IconButton} from "@mui/material";
import { styled } from "@mui/material/styles";
import GlobeComponent from "./Globe";
import {PersonCard} from "./PersonCard";
import "../../css/globe.css"
import CarlosImg from "../../img/CarlosDiez.jpg";
import OmarImg from "../../img/OmarImg.jpg";
import DavidImg from "../../img/DavidImg.jpg";
import RaulImg from "../../img/RaulImg.jpeg"
import Arquisoft from "../../img/Arquisoft.png"
import {useTranslation} from "react-i18next";



const DeveloperBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
});

const Carlos = {
    name: "Carlos Diez Fernández",
    image: CarlosImg,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, libero eget mattis dignissim, quam orci ullamcorper nibh, id hendrerit elit eros ut lorem.",
    github: "uo284373",
};

const Raul = {
    name: "Raúl Fernández España",
    image: RaulImg,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, libero eget mattis dignissim, quam orci ullamcorper nibh, id hendrerit elit eros ut lorem.",
    github: "UO278036",
};

const Omar = {
    name: "Omar Teixeira González",
    image: OmarImg,
    description: "I'm a spanish 20 yo who is very interested in everything related to Technology, I love learning new things about software (or hardware, which I'm tend to learn for myself).",
    github: "Omitg24",
};

const David = {
    name: "David Warzynski Abril",
    image: DavidImg,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, libero eget mattis dignissim, quam orci ullamcorper nibh, id hendrerit elit eros ut lorem.",
    github: "UO278968",
};


const AboutPage = () => {
    const { t } = useTranslation();
    return (




        <Box sx={{ mx: "auto", maxWidth: "90%", px: 4, py: 6 }}>
            <div id="globe">
                <GlobeComponent/>
            </div>
            <Typography variant="h1" align="center"> {t("our-developers")}</Typography>
            <Box mt={6}>
                <Box
                    display="flex"
                    flexDirection={{xs: "column", sm: "row"}}
                    alignItems="center"
                    justifyContent="space-around"
                    mt={4}
                >
                    <DeveloperBox mx={2}>
                        <PersonCard person={Carlos} />
                    </DeveloperBox>

                    <DeveloperBox mx={2}>
                        <PersonCard person={Raul} />
                    </DeveloperBox>

                    <DeveloperBox mx={2}>
                        <PersonCard person={Omar} />
                    </DeveloperBox>

                    <DeveloperBox mx={2}>
                        <PersonCard person={David} />
                    </DeveloperBox>
                </Box>
            </Box>
            <Box mt={6}
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    borderRadius: '12px',
                    padding: '16px'

                }}
            >
            <Box mt={6}>
                <Typography variant="h4" align="center">
                    {t("about-web")}
                </Typography>

                <Box mt={4}>
                    <Typography variant="body1" align="justify">
                        {t("about-webcon")}
                    </Typography>
                </Box>
            </Box>


            <Box mt={6}>
                <Typography variant="h4" align="center">
                    {t("about-subject")}

                </Typography>

                <Box mt={4}>
                    <Typography variant="body1" align="justify">
                        {t("about-sub")}
                    </Typography>

                </Box>
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

    );
}
export default AboutPage;