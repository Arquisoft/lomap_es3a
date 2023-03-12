import {User} from './shared/shareddtypes';
import {SessionProvider, useSession} from "@inrupt/solid-ui-react";
import React, {useEffect, useState} from 'react';
import './App.css';
import ViewPaths from "./components/ViewPaths";

function App(): JSX.Element {

    return (
        <SessionProvider>
            <div>
                <ViewPaths/>
            </div>
        </SessionProvider>
    );
}

export default App;
