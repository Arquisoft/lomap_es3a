import "../../css/navigation.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import GOMapLogo from "../../img/symbols/SimpleSymbol.png";
import {useSession} from "@inrupt/solid-ui-react";
import {Button} from "@mui/material";
import * as React from "react";
import {useEffect, useState} from "react";
import LanguageMenu from "./LanguageMenu";
import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../i18n";
import {Link, NavLink} from 'react-router-dom';
import OurAvatar from "./OurAvatar";

i18n.use(initReactI18next)

function NavBar() {
    const {session} = useSession();

    const {t} = useTranslation();

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    if (session.info.webId === undefined) {
        session.info.webId = "";
    }

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
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/"}>{t("home")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/map"}>{t("map")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/help"}>{t("help")}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/about"}>{t("about")}</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav justify-content-end">
                        <LanguageMenu/>
                        {
                            (session.info.isLoggedIn) ?
                                <OurAvatar webId={session.info.webId}/>
                                :
                                <Link to="/login">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        id="login"
                                    >
                                        {t("login")}
                                    </Button>
                                </Link>

                        }
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default NavBar