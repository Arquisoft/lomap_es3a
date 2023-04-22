import "../../css/navigation.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import GOMapLogo from "../../img/symbols/SimpleSymbol.png";
import NavItem from "./NavItem";
import { useSession} from "@inrupt/solid-ui-react";
import {Button} from "@mui/material";
import * as React from "react";
import {useEffect, useState} from "react";
import LanguageMenu from "./LanguageMenu";
import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../i18n";

import {Link} from 'react-router-dom';
import OurAvatar from "./OurAvatar";

i18n.use(initReactI18next)

function NavBar() {
    const {session} = useSession();
    let {webId} = session.info;


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



    const {t} = useTranslation();

    /**
     * Nuevos Cambios para añadir el Avatar con opciones al LOGIN
     *
     */
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

                    <div id="login-manage">
                        {(!isLoggedIn) ? "" : <OurAvatar webId={webId}/>}
                        {isLoggedIn ? "" : (
                            <Link to="/login">
                                <Button variant="contained" color="primary" id="login">
                                    {t("login")}
                                </Button>
                            </Link>
                        )}

                    </div>
                </div>

            </div>
        </nav>
    );
}

export default NavBar