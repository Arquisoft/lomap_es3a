import MainScreen from "./MainScreen";
import React from "react";
import Notification from '../map/Notification';
function HomePage() {
    return (
        <div>
            <MainScreen/>
            <Notification
                title="Welcome to GOMap!"
                message="Thanks for using our website!"
                time="Just Now"
                icon="https://ejemplo.com/imagen.png"
            />
        </div>
    )
}

export default HomePage