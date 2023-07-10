import "./Header.css";
import { useState } from "react";
import logo from "../assets/logo.png";
import hamburgerMenuIcon from "../assets/icon-hamburgermenu.svg";

export default function Header() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    return (
        <header>
            <nav>
                <a id="navbar-logo">
                    <img alt="Little Lemon logo" src={logo} />
                </a>
                <img
                    alt="Hamburger menu icon"
                    id="hamburger-icon"
                    onClick={() => setExpandNavbar(!expandNavbar)}
                    src={hamburgerMenuIcon}
                />
                <ul
                    className={expandNavbar
                        ? "navbar-links expanded"
                        : "navbar-links"
                    }
                    onClick={() => setExpandNavbar(!expandNavbar)}
                >
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Reservations</a></li>
                    <li><a>Order Online</a></li>
                    <li><a>Login</a></li>
                </ul>
            </nav>
        </header>
    )
}