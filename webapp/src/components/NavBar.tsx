import React from "react";
import {Nav,Navbar} from "react-bootstrap";
import Button from "@mui/material";
import Logo from "../img/Symbol.png";
import {Link} from "react-router-dom";
import "../css/bootstrap.css";

const NavBar = () => {
    return (
        <Navbar bg="black" expand="lg" className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <img src={Logo} alt="Logo LoMap" height={60} width={60}></img>
                
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                        <a className="nav-link" href="/help">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/about">Friend List
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/help">Help</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/help">About</a>
                        </li>
                    </ul>
                </div>
            </div>
            </Navbar>

    );
}

export default NavBar;