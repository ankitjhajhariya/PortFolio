import React from "react";
import './Home.scss';
import Button from "./Button";
import profileImg from '../assets/portfol.png';

function Home() {
    return (
        <div className="home">
            <div className="info">
                <h1>
                    Hey, I'm <br /> <span>Ankit Jhajhariya</span>
                </h1>
                <p>
                    Hi! I'm a Full Stack Web Developer passionate about creating
                    user-friendly and scalable web applications
                </p>

                <div className="button">
                    <div className="button-one">
                        <Button text="HIRE ME" />
                    </div>
                    <div className="button-two">
                        <Button text="Resume" />
                    </div>
                </div>
                <div className="social">
                    <div className="social-icon">
                        <i className="fa-brands fa-github" ></i>
                    </div>
                    <div className="social-icon">
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <div className="social-icon">
                        <i className="fa-brands fa-instagram" ></i>
                    </div>
                    <div className="social-icon">
                        <i className="fa-brands fa-x-twitter" ></i>
                    </div>
                </div>
            </div>
            <div className="img-cover">
                <div className="home-img">
                    <img src={profileImg} alt="Ankit Jhajhariya" />
                </div>
            </div>
        </div>
    );
}

export default Home;
