import React from 'react';
import { Avatar, Box, Typography, Button } from '@mui/material';

interface UserProfileProps {

}

const UserProfile: React.FC<UserProfileProps> = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            px={2}
        >
            <Avatar
                sx={{ width: 150, height: 150, mb: 2 }}
                alt={"name"}
                src={"profileImage"}
            />
            <Typography variant="h4" gutterBottom textAlign="center">
                {"name"}
            </Typography>
            <Typography variant="h6" gutterBottom textAlign="center">
                @{"username"}
            </Typography>
            <Typography variant="body1" gutterBottom textAlign="center">
                {"email"}
            </Typography>
            <Box mt={4}>
                <Button variant="contained">Editar perfil</Button>
            </Box>
        </Box>
    );
};

export default UserProfile;
