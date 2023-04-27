import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import GlobeComponent from "./Globe";


const DeveloperBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
});

const AboutPage = () => {
    return (
        <Box>

            <Typography variant="h2" align="center" mt={4}>
                Sobre nosotros
            </Typography>

            <GlobeComponent/>
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
                        <Avatar src="https://i.pravatar.cc/150?img=1"/>
                        <Typography variant="h5">Desarrollador 1</Typography>
                        <Typography variant="subtitle1">Cargo 1</Typography>
                    </DeveloperBox>

                    <DeveloperBox>
                        <Avatar src="https://i.pravatar.cc/150?img=2"/>
                        <Typography variant="h5">Desarrollador 2</Typography>
                        <Typography variant="subtitle1">Cargo 2</Typography>
                    </DeveloperBox>

                    <DeveloperBox>
                        <Avatar src="https://i.pravatar.cc/150?img=3"/>
                        <Typography variant="h5">Desarrollador 3</Typography>
                        <Typography variant="subtitle1">Cargo 3</Typography>
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