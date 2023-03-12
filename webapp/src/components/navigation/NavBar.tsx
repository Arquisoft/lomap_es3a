import "../../css/navigation.css";
import GOMapLogo from "../../img/symbols/SimpleSymbol.png";
import NavItem from "./NavItem";
import {LoginButton} from "@inrupt/solid-ui-react";
import RegisterMessage from "./RegisterMessage";
import {CombinedDataProvider, LogoutButton, useSession, Text} from "@inrupt/solid-ui-react";
import {FOAF} from "@inrupt/lit-generated-vocab-common";
import {Card, Nav, NavDropdown} from "react-bootstrap";
import {Button} from "@mui/material";
import {useState} from "react";

function NavBar() {

    const {session} = useSession();
    let {webId} = session.info;
    if (webId == undefined)
        webId = "";

    const [isLoggedIn, setIsLoggedIn] = useState(false);


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
                <Text property={FOAF.name.iri.value} autosave/>
            </CombinedDataProvider>
        </span>
    );

    return (
            <nav>
                <a href="/">
                    <img src={GOMapLogo} alt="GOMap Logo" height={128} width={256}/>
                </a>
                <NavItem to={"/"} text={"Home"}/>
                <NavItem to={"/map"} text={"Map"}/>
                <NavItem to={"/help"} text={"Help"}/>
                <NavItem to={"/about"} text={"About"}/>
                <div id="loginPanel">
                    <div id="login-manage">
                        {(!isLoggedIn) ? null :
                            <Card><Card.Text>{dropdownTitle}</Card.Text></Card>}
                        {(!isLoggedIn) ? <LoginButton  oidcIssuer="https://inrupt.net" redirectUrl="http://localhost:3000/map" >
                            <Button variant="contained" color="primary">
                                Login
                            </Button>
                        </LoginButton> : <LogoutButton>
                            <Button variant="contained" color="error">
                            Logout
                        </Button></LogoutButton>}
                    </div>
                    <RegisterMessage/>
                </div>
            </nav>
    );
}

export default NavBar