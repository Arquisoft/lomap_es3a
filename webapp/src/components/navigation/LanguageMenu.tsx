import React, {useState} from 'react';
import {Dropdown} from 'react-bootstrap';

function LanguageMenu() {
    const [selectedLanguage, setSelectedLanguage] = useState('es');

    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
    };

    return (
        <Dropdown className="nav-item dropdown">
            <Dropdown.Toggle className="nav-link dropdown-toggle">
                Cambiar idioma
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleLanguageChange('en')} active={selectedLanguage === 'en'} >
                    Inglés
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguageChange('es')} active={selectedLanguage === 'es'} >
                    Español
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default LanguageMenu;
