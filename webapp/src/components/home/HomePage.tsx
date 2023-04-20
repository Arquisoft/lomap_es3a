import React, {useEffect, useState} from "react";
import "../../css/home.css"
import Notification from "../Notification";
import Icon from "../../img/symbols/GOMapSymbol.png";
import {initReactI18next, useTranslation} from 'react-i18next';
import i18n from "../../i18n";
import ImgCarousel from "./ImgCarousel";
import DescriptionText from "./DescriptionText";
import DocumentationButton from "./DocumentationButton";
import TechStack from "./TechStack";
import FooterInfo from "./FooterInfo";

i18n.use(initReactI18next)

function HomePage() {
    const { t } = useTranslation();

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
        <div id="homeScreen">
            <div>
                <ImgCarousel/>
                <DescriptionText/>
                <DocumentationButton/>
                <div id="usedTechnologies">
                    <TechStack/>
                </div>
                <FooterInfo/>
                {showWelcomeNotification && (
                    <Notification
                        title={t("notificationWelcome")}
                        message={t("notificationMessageHome")}
                        time={t("notificationTime")}
                        icon={Icon}
                        onClose={handleDismissWelcomeNotification}
                    />
                )}
            </div>
        </div>
    )
}

export default HomePage;
