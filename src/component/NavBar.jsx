import React, { useState } from "react";
import './NavBar.scss';
import Button from "./Button";
import { Link } from "react-router-dom";
import LogoImg from '../assets/Logo.png';


function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <section className={`section-navbar ${menuOpen ? 'active' : ''}`}>
            <div className="navBar">
                <div className={`logo ${menuOpen ? 'hidden' : ''}`}>
                    <h2>AnKiT</h2>
                </div>
                <div
                    className={`nav-toggle ${menuOpen ? 'hidden' : ''}`}
                    onClick={toggleMenu}
                >
                    ☰
                </div>
                <div className={`other-Comp ${menuOpen ? 'active' : ''}`}>
                    <div
                        className={`nav-toggle close ${menuOpen ? '' : 'hidden'}`}
                        onClick={toggleMenu}
                    >
                        <i class="fa-regular fa-circle-xmark"></i>
                    </div>
                    <span><Link onClick={toggleMenu} to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</Link></span>
                    <span><Link onClick={toggleMenu} to="/about" style={{ color: '#ffffff', textDecoration: 'none' }}>About Me</Link></span>
                    <span><Link onClick={toggleMenu} to="/projects" style={{ color: '#ffffff', textDecoration: 'none' }}>Projects</Link></span>
                    <span><Link onClick={toggleMenu} to="/skills" style={{ color: '#ffffff', textDecoration: 'none' }}>Skills</Link></span>
                    <Link to="/contact"><button onClick={toggleMenu}>Contact Me</button></Link>
                </div>
            </div>
        </section>
    );
}

export default NavBar;
