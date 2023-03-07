import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import Logo from "../../img/SimpleLogo.png";
import "../../css/bootstrap.css";
import NavItem from "./NavItem";

function NavItems() {
    return (
        <div className="container-fluid">
            <a href="/home">
                <img src={Logo} alt="Logo LoMap" height={128} width={256}/>
            </a>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <NavItem href={"/home"} text={"Home"}/>
                <NavItem href={"/map"} text={"Map"}/>
                <NavItem href={"/help"} text={"Help"}/>
                <NavItem href={"/about"} text={"About"}/>
            </div>
        </div>
    )
}

function NavBar() {
    return (
        <Navbar bg="black" expand="lg" className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavItems />
        </Navbar>
        // <Navbar bg="black" expand="lg" className="navbar navbar-expand-lg navbar-dark bg-primary">
        //     <div className="container-fluid">
        //         <img src={Logo} alt="Logo LoMap" height={64} width={128}/>
        //
        //         <div className="collapse navbar-collapse" id="navbarColor01">
        //             <ul className="navbar-nav me-auto">
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="/help">Home</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="/about">Friend List
        //                     </a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="/help">Help</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="/help">About</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </Navbar>
    )
}

export default NavBar