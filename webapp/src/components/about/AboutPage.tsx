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
    return (




        <Box sx={{ mx: "auto", maxWidth: "90%", px: 4, py: 6 }}>
            <div id="globe">
                <GlobeComponent/>
            </div>
            <Typography variant="h1" align="center">OUR DEVELOPERS:</Typography>
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
                    Acerca de la web
                </Typography>

                <Box mt={4}>
                    <Typography variant="body1" align="justify">
                        GoMap es una innovadora plataforma web que te permite registrar tu cuenta de usuario utilizando la tecnología SOLID,
                        lo que garantiza que tu información personal esté completamente segura y privada. Con GoMap,
                        puedes crear mapas personalizados con distintas categorías y añadir puntos con imágenes y comentarios.
                        Puedes compartir estos mapas con tus amigos de SOLID y ellos también pueden añadir comentarios a tus puntos.
                        Esta herramienta es especialmente útil para la planificación de viajes, para la exploración de lugares desconocidos,
                        para organizar actividades en grupo, y mucho más. Con GoMap, tienes el control total sobre tus mapas y tus datos personales,
                        lo que te permite disfrutar de una experiencia en línea segura y personalizada.
                    </Typography>
                </Box>
            </Box>


            <Box mt={6}>
                <Typography variant="h4" align="center">
                    Acerca de la asignatura

                </Typography>

                <Box mt={4}>
                    <Typography variant="body1" align="justify">
                        La asignatura de Arquitectura del Software se enfoca en enseñar a los estudiantes los conceptos,
                        técnicas y metodologías necesarias para diseñar y construir sistemas de software complejos, robustos y escalables.
                        A lo largo del curso, los estudiantes aprenderán a identificar los requisitos del sistema, a analizar y diseñar la
                        arquitectura, y a implementarla utilizando patrones de diseño, frameworks y herramientas adecuados.

                        También se hará hincapié en los aspectos relacionados con la calidad del software,
                        la eficiencia, la seguridad y la facilidad de mantenimiento. Los estudiantes tendrán la oportunidad de
                        trabajar en proyectos prácticos en equipo para aplicar los conceptos aprendidos y desarrollar habilidades para
                        trabajar en equipo, comunicarse de manera efectiva y manejar el ciclo de vida del software.
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