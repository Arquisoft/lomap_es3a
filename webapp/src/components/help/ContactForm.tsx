import React, {useState} from "react";
import {initReactI18next, useTranslation} from "react-i18next";
import i18n from "../../i18n";


i18n.use(initReactI18next)

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const {t} = useTranslation();

    const handleSubmit = () => {
        // Aquí se puede agregar el código para enviar el formulario
        console.log(`Nombre: ${name}, Email: ${email}, Mensaje: ${message}`);
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div>
            <h1>{t("contactUs")}</h1>
            <form onSubmit={handleSubmit}>
                <h2><label htmlFor="name">
                    {t("name")}
                </label></h2>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("namePlaceholder") ?? ""} required
                />
                <h2><label htmlFor="email">
                    {t("email")}
                </label></h2>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("emailPlaceholder") ?? ""} required
                />
                <h2><label htmlFor="message">
                    {t("message")}
                </label></h2>
                <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t("messagePlaceholder") ?? ""} required
                ></textarea>
                <button type="submit" id="send">
                    {t("send")}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
