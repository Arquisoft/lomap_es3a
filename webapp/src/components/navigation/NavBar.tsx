import "../../css/navigation.css";
import GOMapLogo from "../../img/symbols/SimpleSymbol.png";
import NavItem from "./NavItem";
import LogInButton from "./LogInButton";

function NavBar() {
    return (
        <nav>
            <a href="/">
                <img src={GOMapLogo} alt="GOMap Logo" height={128} width={256}/>
            </a>
            <NavItem to={"/"} text={"Home"}/>
            <NavItem to={"/map"} text={"Map"}/>
            <NavItem to={"/help"} text={"Help"}/>
            <NavItem to={"/about"} text={"About"}/>
            <LogInButton />
        </nav>
    )
}

export default NavBar