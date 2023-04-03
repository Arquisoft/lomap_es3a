import { SessionProvider } from "@inrupt/solid-ui-react";
import React, { useState } from "react";
import "./App.css";
import ViewPaths from "./components/ViewPaths";
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

import { useTheme } from '@mui/material/styles';
import {createTheme, ThemeProvider} from "@mui/material";
import {blue, pink} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: blue[500],
        },
        secondary: {
            main: pink[500],
        },
    },
});
function App(): JSX.Element {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const theme = useTheme();

    const handleSwitchChange = () => {
        setIsDarkMode(!isDarkMode);
    };




    return (

            <div className="App">
                <ViewPaths/>
            </div>
    );
}

export default App;
