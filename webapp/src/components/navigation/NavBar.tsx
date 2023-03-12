import "../../css/navigation.css";
import GOMapLogo from "../../img/symbols/SimpleSymbol.png";
import NavItem from "./NavItem";
import LogInButton from "./LogInButton";
import RegisterMessage from "./RegisterMessage";
import {CombinedDataProvider, LogoutButton, SessionProvider, useSession, Text} from "@inrupt/solid-ui-react";
import {FOAF} from "@inrupt/lit-generated-vocab-common";
import {useState} from "react";
import {Card, Nav, NavDropdown} from "react-bootstrap";

function NavBar() {
    //We use this state variable
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //With this we can control the login status for solid
    const {session} = useSession();
    let {webId} = session.info;
    if (webId == undefined)
        webId = "";

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
        <SessionProvider sessionId="log-in-example">
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
                            <Nav><NavDropdown title={dropdownTitle} className="nav-item mr-3" id=".sixth-step">
                            </NavDropdown>
                            </Nav>}
                        {(!isLoggedIn) ? <LogInButton/> : <LogoutButton></LogoutButton>}
                    </div>
                    <RegisterMessage/>
                </div>
            </nav>
        </SessionProvider>
    )
}

export default NavBar