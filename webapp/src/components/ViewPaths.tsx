import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import MapPage from "./map/MapPage";
import HomePage from "./home/HomePage";
import HelpPage from "./help/HelpPage";
import AboutPage from "./about/AboutPage";

function ViewPaths() {
    return (
        <Router>
            <Routes>
                <Route
                    path='/'
                    element={
                        <HomePage/>
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
            </Routes>
        </Router>
    )
}

export default ViewPaths