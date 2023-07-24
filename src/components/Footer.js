import "./Footer.css";
import pages from "./pages/pages";
import { Link } from "react-router-dom";
import logoFooter from "../assets/logo-footer.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const contactInfo = [
    { icon: faPhone, id: "phone", info: "(012) 345-6789" },
    { icon: faEnvelope, id: "email", info: <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a> },
    { icon: faLocationDot, id: "location", info: "151w W Adams St, Chicago, IL 60603" }
];

const socialMedia = [
    { icon: faFacebook, name: "facebook" },
    { icon: faInstagram, name: "instagram" },
    { icon: faTwitter, name: "twitter" },
    { icon: faYoutube, name: "youtube" }
];

const navbarLinks = Array.from(pages.values()).filter(page => page.fixed);

export default function Footer() {
    return (
        <footer>
            <section id="footer-logo">
                <img alt="Little Lemon logo" src={logoFooter} />
            </section>

            <section id="sitemap">
                <h2>Sitemap</h2>
                <ul>
                    {navbarLinks.map(navbarLink =>
                        <li key={navbarLink.id}>
                            <Link
                                className="sitemap-link"
                                to={navbarLink.path}
                            >
                                {navbarLink.name}
                            </Link>
                        </li>
                    )}
                </ul>
            </section>

            <section id="contact-info">
                <h2>Contact us</h2>
                <address>
                    {contactInfo.map(contact =>
                        <p key={contact.id}>
                            <FontAwesomeIcon
                                icon={contact.icon}
                                size="lg"
                            /> {contact.info}
                        </p>
                    )}
                </address>
            </section>

            <section id="social-media">
               <h2>Our social media</h2>
                <ul>
                    {socialMedia.map(social =>
                        <li key={social.name}>
                            <a
                                href={`https://www.${social.name}.com`}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    icon={social.icon}
                                    size="lg"
                                />
                            </a>
                        </li>
                    )}
                </ul>
            </section>
        </footer>
    )
}