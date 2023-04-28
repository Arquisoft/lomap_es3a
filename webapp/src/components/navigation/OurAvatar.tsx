import {initReactI18next, useTranslation} from "react-i18next";
import * as React from 'react';
import {useState} from 'react';
import {
    Avatar,
    Box,
    Button,
    Container,
    Divider,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';
import {Link} from 'react-router-dom';
import {FOAF, VCARD} from "@inrupt/lit-generated-vocab-common";
import {CombinedDataProvider, Image, LogoutButton, Text} from '@inrupt/solid-ui-react';
import {GroupAdd, Person} from "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';
import i18n from "../../i18n";

i18n.use(initReactI18next)

interface AvatarType {
    webId: string;
}

const OurAvatar = ({webId}: AvatarType) => {
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
                <Box sx={{flexGrow: 0}}>
                    <Tooltip title={t("options-profile")}>
                        <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                            <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
                                <Avatar
                                    alt="Profile picture"
                                    sx={{width: 65, height: 65, mb: 2, margin: 0}}
                                >
                                    <Image property={VCARD.hasPhoto.iri.value} width={65}/>
                                </Avatar>
                            </CombinedDataProvider>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{mt: '45px'}}
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
                            <Typography textAlign="center">{t("registered-as")}
                                <strong><em>{dropdownTitle}</em></strong>
                            </Typography>
                        </MenuItem>
                        <Divider style={{borderColor: "#333"}}/>
                        <MenuItem onClick={handleCloseUserMenu} component={Link} to="/profile">
                            <ListItemIcon>
                                <Person fontSize="small"/>
                            </ListItemIcon>
                            <Typography textAlign="center">
                                {t("profile")}
                            </Typography>
                        </MenuItem>
                        <MenuItem onClick={handleCloseUserMenu} component={Link} to="/friends">
                            <ListItemIcon>
                                <GroupAdd fontSize="small"/>
                            </ListItemIcon>
                            <Typography textAlign="center">
                                {t("friends")}
                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <LogoutButton>
                                <Button variant="contained" color="error" id="logout">
                                    <LogoutIcon/>
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
