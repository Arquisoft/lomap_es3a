import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MapPage from "./map/MapPage";
import HomePage from "./home/HomePage";
import React from "react";

function ViewPaths() {
    return (
        <Router>
            <Routes>
                <Route
                    path='/'
                    element={
                        <HomePage />
                    }
                />
                <Route
                    path='/home'
                    element={
                        <HomePage />
                    }
                />
                <Route
                    path='/map'
                    element={
                        <MapPage />
                    }
                />
            </Routes>
        </Router>
    )
}

export default ViewPaths