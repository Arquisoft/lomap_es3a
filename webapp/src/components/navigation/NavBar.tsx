import "../../css/navigation.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import GOMapLogo from "../../img/symbols/SimpleSymbol.png";
import NavItem from "./NavItem";
import {CombinedDataProvider, LoginButton, LogoutButton, Text, useSession} from "@inrupt/solid-ui-react";
import {FOAF, VCARD} from "@inrupt/lit-generated-vocab-common";
import {Button, Card, CardActionArea, CardContent} from "@mui/material";
import {useState, useEffect} from "react";
import LanguageMenu from "./LanguageMenu";
import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../i18n";
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

import { Image} from "@inrupt/solid-ui-react";




i18n.use(initReactI18next)

function NavBar() {
    const { session } = useSession();
    let { webId } = session.info;



    if (webId === undefined)
        webId = "";

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    function handleNavToggle() {
        setIsNavExpanded(!isNavExpanded);
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 992 && isNavExpanded) {
                setIsNavExpanded(false);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isNavExpanded]);

    //We have logged in
    session.onLogin(() => {
        setIsLoggedIn(true)
    })

    //We have logged out
    session.onLogout(() => {
        setIsLoggedIn(false)
    })

    const dropdownTitle = (
        <span>
            <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
                <Text property={FOAF.name.iri.value}  autosave/>


            </CombinedDataProvider>
        </span>
    );




    const { t } = useTranslation();

    /**
     * Nuevos Cambios para añadir el Avatar con opciones al LOGIN
     *
     */

    const settings = ['Profile', 'Account', 'Dashboard'];


        const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
            null
        );

        const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorElUser(event.currentTarget);
        };

        const handleCloseUserMenu = () => {
            setAnchorElUser(null);
        };
        let ano = <Image property={VCARD.hasPhoto.iri.value} width={480}/> as unknown  as HTMLImageElement;

        console.log(ano);

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark ${isNavExpanded ? 'nav-expanded' : 'nav-normal'}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={GOMapLogo} alt="GOMap Logo" height={128} width={256}/>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleNavToggle}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavExpanded ? 'show' : ''}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavItem to={"/"} text={t("home")}/>
                        <NavItem to={"/map"} text={t("map")}/>
                        <NavItem to={"/help"} text={t("help")}/>
                        <NavItem to={"/about"} text={t("about")}/>
                    </ul>
                    <LanguageMenu/>
                    <div className="d-flex">
                        <div id="login-manage">
                            {(!isLoggedIn) ? "" :
                                <div>

                                    <Container maxWidth="xl">

                                        <Toolbar disableGutters>
                                            <label>
                                                <text>{dropdownTitle}</text>&nbsp;
                                            </label>
                                            <Box sx={{ flexGrow: 0 }}>
                                                <Tooltip title="Open settings">
                                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                            <CombinedDataProvider datasetUrl={webId} thingUrl={webId}>
                                                                        <Avatar alt="Remy Sharp" ><Image property={VCARD.hasPhoto.iri.value} width={40}/></Avatar>
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
                                                    {settings.map((setting) => (
                                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                            <Typography textAlign="center">{setting}</Typography>
                                                        </MenuItem>
                                                    ))}
                                                    <MenuItem onClick={handleCloseUserMenu} component={Link} to="/profile">
                                                        <Typography textAlign="center">{"Profile"}</Typography>
                                                    </MenuItem>
                                                    <MenuItem >
                                                        <LogoutButton>
                                                            <Button variant="contained" color="error" id="logout">
                                                                {t("logout")}
                                                            </Button>
                                                        </LogoutButton>
                                                    </MenuItem>
                                                </Menu>
                                            </Box>
                                        </Toolbar>
                                    </Container>

                                </div>
}
                            {isLoggedIn ? "" :(
                                <LoginButton oidcIssuer="https://inrupt.net" redirectUrl={window.location.href}>
                                    <Button variant="contained" color="primary" id="login">
                                        {t("login")}
                                    </Button>
                                </LoginButton>
                            )}
                            {!isLoggedIn && (
                                <a href="https://inrupt.net/register">{t("register")}</a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar