import React, {useEffect, useState} from "react";
import HomeScreen from "./HomeScreen";
import Notification from "../Notification";
import Icon from "../../img/symbols/GOMapSymbol.png";
import {useTranslation} from 'react-i18next';

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

    const { t } = useTranslation();

    return (
        <div>
            <HomeScreen/>
            {showWelcomeNotification && (
                <Notification
                    title={t("notification_welcome")}
                    message={t("notification_message_home")}
                    time={t("notification_time")}
                    icon={Icon}
                    onClose={handleDismissWelcomeNotification}
                />
            )}
        </div>
    );
}

export default HomePage;
