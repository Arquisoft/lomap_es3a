import React, { useState } from "react";
import { initReactI18next, useTranslation } from "react-i18next";
import i18n from "../../i18n";
import emailjs from "emailjs-com";

i18n.use(initReactI18next);

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const { t } = useTranslation();

    const handleSendEmail = async () => {
        setIsSending(true);

        emailjs.init("LuLSz-HlZSV2FSm0-");

        const emailData = {
            from_name: "LoMapES3A",
            to_name: name,
            to_email: email,

            message_html: message,
            subject: "Solicitud de Soporte",
        };

        try {
            console.log(email);
            await emailjs.send(
                "service_stc5l45",
                "template_xtu75gd",
                emailData
            );
            setName("");
            setEmail("");
            setMessage("");
            setIsSending(false);
        } catch (error) {
            console.log(error);
            setIsSending(false);
        }
    };

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        await handleSendEmail();
    };

    return (
        <div>
            <h1>{t("contactUs")}</h1>
            <form onSubmit={(e) => void handleSubmit(e)}>
                <h2>
                    <label htmlFor="name">{t("name")}</label>
                </h2>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("namePlaceholder") ?? ""}
                    required
                />
                <h2>
                    <label htmlFor="email">{t("email")}</label>
                </h2>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("emailPlaceholder") ?? ""}
                    required
                />
                <h2>
                    <label htmlFor="message">{t("message")}</label>
                </h2>
                <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t("messagePlaceholder") ?? ""}
                    required
                ></textarea>
                <button type="submit" id="send" disabled={isSending}>
                    {isSending ? t("sending") : t("send")}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
