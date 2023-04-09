import React, {useState} from 'react';
import {Dropdown} from 'react-bootstrap';
import {initReactI18next, useTranslation} from 'react-i18next';
import i18n from 'i18next';
import UKFlag from "../../img/flags/UKFlag.png";
import SpainFlag from "../../img/flags/SpainFlag.png";
import FranceFlag from "../../img/flags/FranceFlag.png";
import GermanyFlag from "../../img/flags/GermanyFlag.png";
import ChinaFlag from "../../img/flags/ChinaFlag.png";
import AsturiasFlag from "../../img/flags/AsturiasFlag.png";

i18n.use(initReactI18next)

function LanguageMenu() {
    const [selectedLanguage, setSelectedLanguage] = useState(sessionStorage.getItem("language") || "en");

    const {t} = useTranslation();

    const handleLanguageChange = (language: string) => {
        i18n.changeLanguage(language).then(() => {
            console.log("Language changed correctly");
        });
        setSelectedLanguage(language);
    };

    return (
        <Dropdown className="nav-item dropdown">
            <Dropdown.Toggle className="dropdown-toggle">
                {t("language")}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <div className="dropdown-item" onClick={() => handleLanguageChange('en')}>
                    <img src={UKFlag} alt="Flag of UK" width="24"/>
                    <Dropdown.Item active={selectedLanguage === 'en'}>
                        {t("english")}
                    </Dropdown.Item>
                </div>
                <div className="dropdown-item" onClick={() => handleLanguageChange('es')}>
                    <img src={SpainFlag} alt="Flag of Spain" width="24"/>
                    <Dropdown.Item active={selectedLanguage === 'es'}>
                        {t("spanish")}
                    </Dropdown.Item>
                </div>
                <div className="dropdown-item" onClick={() => handleLanguageChange('fr')}>
                    <img src={FranceFlag} alt="Flag of France" width="24"/>
                    <Dropdown.Item active={selectedLanguage === 'fr'}>
                        {t("french")}
                    </Dropdown.Item>
                </div>
                <div className="dropdown-item" onClick={() => handleLanguageChange('deu')}>
                    <img src={GermanyFlag} alt="Flag of Germany" width="24"/>
                    <Dropdown.Item active={selectedLanguage === 'deu'}>
                        {t("german")}
                    </Dropdown.Item>
                </div>
                <div className="dropdown-item" onClick={() => handleLanguageChange('chn')}>
                    <img src={ChinaFlag} alt="Flag of China" width="24"/>
                    <Dropdown.Item active={selectedLanguage === 'chn'}>
                        {t("chinese")}
                    </Dropdown.Item>
                </div>
                <div className="dropdown-item" onClick={() => handleLanguageChange('ast')}>
                    <img src={AsturiasFlag} alt="Flag of Asturias" width="24"/>
                    <Dropdown.Item active={selectedLanguage === 'ast'}>
                        {t("asturian")}
                    </Dropdown.Item>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default LanguageMenu;
