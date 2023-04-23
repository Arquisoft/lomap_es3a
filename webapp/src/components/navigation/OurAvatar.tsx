import { useState } from 'react';
import {
    Box,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
    Toolbar,
    Avatar,
    Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import {FOAF, VCARD} from "@inrupt/lit-generated-vocab-common";
import {CombinedDataProvider, LogoutButton, Text, Image} from '@inrupt/solid-ui-react';
import {t} from "i18next";
import * as React from "react";
interface AvatarType {
    webId: string;
}

const OurAvatar = ({ webId}: AvatarType) => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const dropdownTitle = (
        <span>
            <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
                <Text property={FOAF.name.iri.value} autosave/>


            </CombinedDataProvider>
        </span>
    );

    const settings = ['Account', 'Dashboard'];

    return (
        <Container maxWidth="xs">
            <Toolbar disableGutters>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
                                <Avatar
                                    alt="Profile picture"
                                    sx={{ width: 65, height: 65, mb: 2, margin: 0 }}
                                >
                                    <Image property={VCARD.hasPhoto.iri.value} width={65} />
                                </Avatar>
                            </CombinedDataProvider>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <MenuItem onClick={handleCloseUserMenu} component={Link} to="/profile">
                            <Typography textAlign="center">{dropdownTitle}</Typography>
                        </MenuItem>
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                        <MenuItem onClick={handleCloseUserMenu} component={Link} to="/profile">
                            <Typography textAlign="center">{'Profile'}</Typography>
                        </MenuItem>
                        <MenuItem>
                            <LogoutButton>
                                <Button variant="contained" color="error" id="logout">
                                    {t('logout')}
                                </Button>
                            </LogoutButton>
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </Container>
    );
};

export default OurAvatar;
