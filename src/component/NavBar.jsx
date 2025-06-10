import React from "react";
import './NavBar.scss'
import Button from "./Button";

function NavBar() {
    return (
        <>
            <section className="section-navbar">
                <div className="navBar">
                    <div className="logo">
                        <h2>PortFolio</h2>
                    </div>
                    <div className="other-Comp">
                        <span>Home</span>
                        <span>About ME</span>
                        <span>Projects</span>
                        <span>Services</span>
                        <Button text="Contact Me" col="white" bg="blue" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default NavBar;