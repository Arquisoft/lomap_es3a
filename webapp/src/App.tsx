import {SessionProvider} from "@inrupt/solid-ui-react";
import React from 'react';
import './App.css';
import ViewPaths from "./components/ViewPaths";

function App(): JSX.Element {

    return (
        <SessionProvider session-id="login">
            <ViewPaths/>
        </SessionProvider>
    );
}

export default App;