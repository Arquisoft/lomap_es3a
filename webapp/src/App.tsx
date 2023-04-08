import {SessionProvider} from "@inrupt/solid-ui-react";
import React from 'react';
import './App.css';
import ViewPaths from "./components/ViewPaths";
import {initReactI18next} from "react-i18next";
import i18n from "./i18n";

i18n.use(initReactI18next)

function App(): JSX.Element {

    return (
        <SessionProvider session-id="login">
            <div>
                <ViewPaths/>
            </div>
        </SessionProvider>
    );
}

export default App;