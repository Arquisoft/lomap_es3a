import {SessionProvider} from "@inrupt/solid-ui-react";
import React from 'react';
import './App.css';
import NavBar from "./components/navigation/NavBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import MapPage from "./components/map/MapPage";
import HelpPage from "./components/help/HelpPage";
import AboutPage from "./components/about/AboutPage";
import UserProfile from "./components/UserProfile";

function App(): JSX.Element {

    return (
        <SessionProvider session-id="login">
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
        </SessionProvider>
    );
}

export default App;