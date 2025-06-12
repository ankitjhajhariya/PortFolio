import React, { useEffect } from "react";
import './Home.scss';
import Button from "./Button";
import profileImg from '../assets/Portfol.png';

function Home() {
    useEffect(() => {
        const textList = [
            "Ankit Jhajhariya",
            "a Full Stack Developer",
            "a Freelancer",
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 120;
        const pauseBetweenWords = 1500;
        const typingElement = document.getElementById("typingText");

        let timeoutId;

        function type() {
            if (typingElement) {
                const currentText = textList[textIndex];
                typingElement.textContent = currentText.substring(0, charIndex);

                if (!isDeleting) {
                    if (charIndex < currentText.length) {
                        charIndex++;
                        timeoutId = setTimeout(type, typingSpeed);
                    } else {
                        isDeleting = true;
                        timeoutId = setTimeout(type, pauseBetweenWords);
                    }
                } else {
                    if (charIndex > 0) {
                        charIndex--;
                        timeoutId = setTimeout(type, typingSpeed / 2);
                    } else {
                        isDeleting = false;
                        textIndex = (textIndex + 1) % textList.length;
                        timeoutId = setTimeout(type, 300);
                    }
                }
            }
        }

        type();

        // Cleanup on component unmount
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="home">
            <div className="info">
                <h1>
                    Hey, I'm <br />
                    <span className="typing-text" id="typingText"></span>
                </h1>

                <p>
                    Hi! I'm a Full Stack Web Developer passionate about creating
                    user-friendly and scalable web applications.
                </p>

                <div className="button">
                    <div className="button-one">
                        <Button
                            text="Resume"
                            link="/AnkitJhajhariyaCV.pdf"
                            download={true}
                        />
                    </div>
                    <div className="button-two">
                        {/* Future button like "Hire Me" can be added here */}
                    </div>
                </div>

                <div className="social">
                    <div className="social-icon">
                        <a href="https://github.com/ankitjhajhariya" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/ankit-jhajhariya-07b634278" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="social-icon">
                        <a href="https://instagram.com/your_instagram_link" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                    <div className="social-icon">
                        <a href="https://twitter.com/your_twitter_link" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
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
