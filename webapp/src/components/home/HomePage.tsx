import React, {useEffect, useState} from "react";
import MainScreen from "./MainScreen";
import Notification from "../map/Notification";

function HomePage() {
    const [showWelcomeNotification, setShowWelcomeNotification] = useState(false);

    useEffect(() => {
        const notificationShown = localStorage.getItem("notificationShown");
        if (!notificationShown) {
            setShowWelcomeNotification(true);
            localStorage.setItem("notificationShown", "true");
        }
    }, []);

    const handleDismissWelcomeNotification = () => {
        setShowWelcomeNotification(false);
    };

    return (
        <div>
            <MainScreen/>
            {showWelcomeNotification && (
                <Notification
                    title="Welcome to GOMap!"
                    message="Thanks for using our website!"
                    time="Just Now"
                    icon="https://ejemplo.com/imagen.png"
                    onClose={handleDismissWelcomeNotification}
                />
            )}
        </div>
    );
}

export default HomePage;
