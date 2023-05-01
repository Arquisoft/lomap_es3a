import React from "react";
import {Box, Typography, Avatar, Card, CardMedia, CardContent, CardActions, Button} from "@mui/material";
import { styled } from "@mui/material/styles";
import GlobeComponent from "./Globe";
import {PersonCard} from "./PersonCard";
import "../../css/globe.css"
import CarlosImg from "../../img/CarlosDiez.jpg";
import OmarImg from "../../img/OmarImg.jpg";
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
    image: OmarImg,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, libero eget mattis dignissim, quam orci ullamcorper nibh, id hendrerit elit eros ut lorem.",
    github: "UO278036",
};

const Omar = {
    name: "Omar Teixeira González",
    image: OmarImg,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, libero eget mattis dignissim, quam orci ullamcorper nibh, id hendrerit elit eros ut lorem.",
    github: "Omitg24",
};

const David = {
    name: "David Leszek Warzynski Abril",
    image: "/static/images/person.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim, libero eget mattis dignissim, quam orci ullamcorper nibh, id hendrerit elit eros ut lorem.",
    github: "UO278968",
};


const AboutPage = () => {
    return (

        <Box>

            <Typography variant="h2" align="center" mt={4}>
                Sobre nosotros
            </Typography>
            <div id="globe">
                <GlobeComponent/>
            </div>
            <Box mt={6}>
                <Typography variant="h4" align="center">
                    Desarrolladores
                </Typography>

                <Box
                    display="flex"
                    flexDirection={{xs: "column", sm: "row"}}
                    alignItems="center"
                    justifyContent="space-around"
                    mt={4}
                >
                    <DeveloperBox>
                        <PersonCard person={Carlos} />

                    </DeveloperBox>

                    <DeveloperBox>
                        <PersonCard person={Raul} />

                    </DeveloperBox>
                    <DeveloperBox>
                        <PersonCard person={Omar} />

                    </DeveloperBox>
                    <DeveloperBox>
                        <PersonCard person={David} />

                    </DeveloperBox>
                </Box>
            </Box>

            <Box mt={6}>
                <Typography variant="h4" align="center">
                    Acerca de la web
                </Typography>

                <Box mt={4}>
                    <Typography variant="body1" align="justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        dignissim, libero eget mattis dignissim, quam orci ullamcorper nibh,
                        id hendrerit elit eros ut lorem. Maecenas malesuada arcu vel massa
                        suscipit vestibulum. Aliquam erat volutpat. Donec vestibulum diam eu
                        metus tristique varius. In ut enim ipsum. In fringilla metus a
                        volutpat sagittis. Sed non neque non purus accumsan convallis. Fusce
                        euismod turpis a massa malesuada bibendum.
                    </Typography>
                </Box>
            </Box>

            <Box mt={6}>
                <Typography variant="h4" align="center">
                    Acerca de la asignatura
                </Typography>

                <Box mt={4}>
                    <Typography variant="body1" align="justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        dignissim, libero eget mattis dignissim, quam orci ullamcorper nibh,
                        id hendrerit elit eros ut lorem. Maecenas malesuada arcu vel massa
                        suscipit vestibulum. Aliquam erat volutpat. Donec vestibulum diam eu
                        metus tristique varius. In ut enim ipsum. In fringilla metus a
                        volutpat sagittis. Sed non neque non purus accumsan convallis. Fusce
                    </Typography>
                </Box>
            </Box>

        </Box>
    );
}
export default AboutPage;