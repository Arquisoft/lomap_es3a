import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Button} from "@mui/material";
import {LoginButton} from "@inrupt/solid-ui-react";
import "../../css/login.css";
import Logo from "../../img/FullLogo.png";

function LoginPage() {
    const [idp, setIdp] = useState("https://inrupt.net");
    const providers = [
        {name: "Inrupt", value: "https://inrupt.net"},
        {name: "SolidCommunity", value: "https://solidcommunity.net"},
    ];
    const {t} = useTranslation();


    function changeProvider() {
        let provider = (document.getElementById("selectProvider") as HTMLSelectElement).value;
        console.log(provider)
        setIdp(provider)
    }


    return (
        <div id="loginBody">
            <div id="loginForm">
                <img src={Logo} width={350}/>
                <h1>{t("login")}</h1>
                <form>
                    <p>{t("provider")}</p>
                    <select onChange={changeProvider} id="selectProvider">
                        <option value={providers[0].value}>{providers[0].name}</option>
                        <option value={providers[1].value}>{providers[1].name}</option>
                    </select>
                    <a href={idp + "/register"}>{t("register")}</a>
                    <div id="loginButton">
                        <LoginButton oidcIssuer={idp} redirectUrl={window.location.origin}>
                            <Button variant="contained" color="primary" id="login">
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