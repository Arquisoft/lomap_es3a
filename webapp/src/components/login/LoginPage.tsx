import React, {useState} from "react";
import {initReactI18next, useTranslation} from "react-i18next";
import {Button} from "@mui/material";
import {LoginButton} from "@inrupt/solid-ui-react";
import "../../css/login.css";
import Logo from "../../img/FullLogo.png";
import LoginIcon from "@mui/icons-material/Login";
import i18n from "../../i18n";

i18n.use(initReactI18next)

function LoginPage() {
    const {t} = useTranslation();

    const [idp, setIdp] = useState("https://inrupt.net");

    const providers = [
        {name: "Inrupt", value: "https://inrupt.net"},
        {name: "SolidCommunity", value: "https://solidcommunity.net"},
    ];

    function changeProvider() {
        let provider = (document.getElementById("selectProvider") as HTMLSelectElement).value;
        console.log(provider)
        setIdp(provider)
    }

    const url = new URL(window.location.origin + "/map").toString();

    return (
        <div id="loginBody">
            <div id="loginForm">
                <img src={Logo} width={350} alt="GOMap Logo"/>
                <h1>{t("login")}</h1>
                <form>
                    <p>{t("provider")}</p>
                    <select onChange={changeProvider} id="selectProvider">
                        <option value={providers[0].value}>{providers[0].name}</option>
                        <option value={providers[1].value}>{providers[1].name}</option>
                    </select>
                    <a href={idp + "/register"}>{t("register")}</a>
                    <div id="loginButton">
                        <LoginButton oidcIssuer={idp} redirectUrl={url}>
                            <Button variant="contained" color="primary" id="login">
                                <LoginIcon />
                                {t("login")}
                            </Button>
                        </LoginButton>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage