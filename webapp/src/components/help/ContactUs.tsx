import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";
import ContactFooter from "./ContactFooter";

function ContactUs() {

    return (
        <div id="fullPanel">
            <div id="contactPanel">
                <div id="contactMap">
                    <ContactMap />
                </div>
                <div id="contactForm">
                    <ContactForm/>
                </div>
            </div>
            <ContactFooter />
        </div>
    );
}

export default ContactUs;
