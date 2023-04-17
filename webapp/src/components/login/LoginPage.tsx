import React, { useState } from "react";
import {useTranslation} from "react-i18next";
import {Button} from "@mui/material";
import {LoginButton} from "@inrupt/solid-ui-react";
import "../../css/login.css";

function LoginPage(){
    const [idp, setIdp] = useState("https://inrupt.net");
    const providers = [
        { name: "Inrupt", value: "https://inrupt.net" },
        { name: "SolidCommunity", value: "https://solidcommunity.net" },
    ];
    const { t } = useTranslation();


    function changeProvider(){
        let provider = (document.getElementById("selectProvider") as HTMLSelectElement).value;
        console.log(provider)
        setIdp(provider)
    }


    return (
        <div id="loginBody">
            <div id="loginForm">
                <h1>LoMap</h1>
                <h2>Sign In</h2>
                <form>
                    <p>{t("provider")}</p>
                    <select onChange={changeProvider} id="selectProvider">
                        <option value={providers[0].value}>{providers[0].name}</option>
                        <option value={providers[1].value}>{providers[1].name}</option>
                    </select>
                    <a href={idp+"/register"}>{t("register")}</a>
                    <div id="loginButton">
                        <LoginButton oidcIssuer={idp} redirectUrl={window.location.href}>
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