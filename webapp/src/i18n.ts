import i18n from 'i18next';
import {initReactI18next} from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: require("./languages/language_en.json")
            },
            es: {
                translation: require("./languages/language_es.json")
            },
            fr: {
                translation: require("./languages/language_fr.json")
            },
            deu: {
                translation: require("./languages/language_deu.json")
            },
            chn: {
                translation: require("./languages/language_chn.json")
            },
            ast: {
                translation: require("./languages/language_ast.json")
            }
        },
        lng: sessionStorage.getItem("language") || "en",
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
    }).then(() => {
        console.log("Internationalization initialized correctly")
    });

const saveLanguageToSession = (language: string) => {
    sessionStorage.setItem("language", language);
};

i18n.on("languageChanged", (lang) => {
    saveLanguageToSession(lang);
});

export default i18n;