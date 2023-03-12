import {SessionProvider, useSession} from "@inrupt/solid-ui-react";
import React, { useState} from 'react';
import './App.css';
import ViewPaths from "./components/ViewPaths";

function App(): JSX.Element {

    const {session} = useSession();


    return (
        <SessionProvider session-id="login">
            <div>
                <ViewPaths/>
            </div>
        </SessionProvider>
    );
}

export default App;
