import NavBar from "../navigation/NavBar";
import MainScreen from "./MainScreen";
import LogInButton from "../navigation/LogInButton";
import React from "react";

function HomePage() {
    return (
        <div>
            <NavBar/>
            <MainScreen/>
        </div>
    )
}

export default HomePage