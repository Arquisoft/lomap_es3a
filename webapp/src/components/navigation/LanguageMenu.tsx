import React, {useState} from 'react';
import {Dropdown} from 'react-bootstrap';
import {initReactI18next, useTranslation} from 'react-i18next';
import i18n from '../../i18n';

i18n.use(initReactI18next)

function LanguageMenu() {
    const [selectedLanguage, setSelectedLanguage] = useState(sessionStorage.getItem("language") || "en");

    const {t} = useTranslation();

    async function handleLanguageChange(language: string)  {
        await i18n.changeLanguage(language).then(() => {
            console.log("Language changed correctly");
        });
        setSelectedLanguage(language);
    };

    return (
        <Dropdown className="dropdown">
            <Dropdown.Toggle className="dropdown-toggle">
                {t("language")}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <div className="dropdown-item" onClick={() => void handleLanguageChange('en')}>
                    <Dropdown.Item active={selectedLanguage === 'en'}>
                        {t("english")}
                    </Dropdown.Item>
                </div>
                <div className="dropdown-item" onClick={() => void handleLanguageChange('es')}>
                    <Dropdown.Item active={selectedLanguage === 'es'}>
                        {t("spanish")}
                    </Dropdown.Item>
                </div>
                <div className="dropdown-item" onClick={() => void handleLanguageChange('fr')}>
                    <Dropdown.Item active={selectedLanguage === 'fr'}>
                        {t("french")}
                    </Dropdown.Item>
                </div>
                <div className="dropdown-item" onClick={() => void handleLanguageChange('deu')}>
                    <Dropdown.Item active={selectedLanguage === 'deu'}>
                        {t("german")}
                    </Dropdown.Item>
                </div>
                <div className="dropdown-item" onClick={() => void handleLanguageChange('chn')}>
                    <Dropdown.Item active={selectedLanguage === 'chn'}>
                        {t("chinese")}
                    </Dropdown.Item>
                </div>
                <div className="dropdown-item" onClick={() => void handleLanguageChange('ast')}>
                    <Dropdown.Item active={selectedLanguage === 'ast'}>
                        {t("asturian")}
                    </Dropdown.Item>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default LanguageMenu;
