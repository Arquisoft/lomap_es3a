import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";
import BlueMarker from "../../img/help/BlueMarker.png";
import BluePhone from "../../img/help/BluePhone.png";
import BlueFax from "../../img/help/BlueFax.png";
import BlueEmail from "../../img/help/BlueEmail.png";

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
            <footer id="contactFooter">
                <div className="contactMedia">
                    <img src={BlueMarker} alt={"Blue marker"}/>
                    <h3>Our main office</h3>
                    <p>Calle Valdés Salas, 11, 33007 Oviedo, Asturias</p>
                </div>
                <div className="contactMedia">
                    <img src={BluePhone} alt={"Blue phone"}/>
                    <h3>Our phone</h3>
                    <p>+34 985 10 27 96</p>
                </div>
                <div className="contactMedia">
                    <img src={BlueFax} alt={"Blue fax"}/>
                    <h3>Our fax</h3>
                    <p>+1-555-123-4567</p>
                </div>
                <div className="contactMedia">
                    <img src={BlueEmail} alt={"Blue email"}/>
                    <h3>Our email</h3>
                    <p><a href="mailto:support@lomapes3a.com">support@lomapes3a.com</a></p>
                </div>
            </footer>
        </div>
    );
}

export default ContactUs;
