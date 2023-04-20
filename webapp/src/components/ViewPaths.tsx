import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import MapPage from "./map/MapPage";
import HomePage from "./home/HomePage";
import HelpPage from "./help/HelpPage";
import AboutPage from "./about/AboutPage";
import NavBar from "./navigation/NavBar";
import UserProfile from "./UserProfile";
import LoginPage from "./login/LoginPage";


function ViewPaths() {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route
                    path='/'
                    element={
                        <HomePage/>
                    }
                />
                <Route
                    path='/login'
                    element={
                        <LoginPage/>
                    }
                />
                <Route
                    path='/map'
                    element={
                        <MapPage/>
                    }
                />
                <Route
                    path='/help'
                    element={
                        <HelpPage/>
                    }
                />
                <Route
                    path='/about'
                    element={
                        <AboutPage/>
                    }
                />
                <Route
                    path='/profile'
                    element={
                        <UserProfile/>
                    }
                />
            </Routes>
        </Router>
    )
}

export default ViewPaths