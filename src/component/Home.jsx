import React from "react";
import './Home.scss';
import Button from "./Button";
import profileImg from '../assets/Portfol.png';

function Home() {
    return (
        // <div className="home cover">
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
                        <a href="https://github.com/ankitjhajhariya"><i className="fa-brands fa-github" ></i></a>
                    </div>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/ankit-jhajhariya-07b634278?utm_source=share&utm_
                        campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    <div className="social-icon">
                        <i className="fa-brands fa-instagram" ></i>
                    </div>
                    <div className="social-icon">
                        <a href=""><i className="fa-brands fa-x-twitter" ></i></a>
                    </div>
                </div>
            </div>
            <div className="img-cover">
                <div className="home-img">
                    <img src={profileImg} alt="Ankit Jhajhariya" />
                </div>
            </div>
        </div>
        // </div>
    );
}

export default Home;
