import {useTranslation} from "react-i18next";
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
import * as React from "react";
interface AvatarType {
    webId: string;
}

const OurAvatar = ({ webId}: AvatarType) => {
    const {t} = useTranslation();
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



    return (
        <Container maxWidth="xs">
            <Toolbar disableGutters>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title={t("options-profile")}>
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

                        <MenuItem onClick={handleCloseUserMenu} component={Link} to="/profile">
                            <Typography textAlign="center">{t("profile")}</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseUserMenu} component={Link} to="/friends">
                            <Typography textAlign="center">{t("friends")}</Typography>
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
