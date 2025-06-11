import React from "react";
import './NavBar.scss'
import Button from "./Button";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <section className="section-navbar">
                <div className="navBar">
                    <div className="logo">
                        <h2>PortFolio</h2>
                    </div>
                    <div className="other-Comp">
                        <span><Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}> Home</Link></span>
                        <span><Link to="about" style={{ color: '#ffffff', textDecoration: 'none' }}>About ME</Link></span>
                        <span><Link to="projects" style={{ color: '#ffffff', textDecoration: 'none' }}>Projects</Link></span>
                        <span><Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Services</Link></span>
                        <Button text="Contact Me" col="white" bg="blue" />
                    </div>
                </div>
            </section >
        </>
    );
}

export default NavBar;