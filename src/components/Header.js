import "./Header.css";
import { useState } from "react";
import pages from "./pages/pages";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import hamburgerMenuIcon from "../assets/icon-hamburgermenu.svg";

const navbarLinks = Array.from(pages.values()).filter(page => page.fixed);

export default function Header() {
    const { pathname } = useLocation();
    const [expandNavbar, setExpandNavbar] = useState(false);

    return (
        <header>
            <nav>
                <Link id="navbar-logo" to={pages.get("home").path}>
                    <img alt="Little Lemon logo" src={logo} />
                </Link>
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
                    {navbarLinks.map(navbarLink =>
                        <li key={navbarLink.id}>
                            <Link
                                className={pathname == navbarLink.path
                                    ? "link current-page"
                                    : "link"}
                                to={navbarLink.path}
                            >
                                {navbarLink.name}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}