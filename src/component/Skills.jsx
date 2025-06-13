import React from "react";
import "./Skills.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

const skills = [
    { name: "HTML", fa: "fab fa-html5", color: "#e34c26" },
    { name: "CSS", fa: "fab fa-css3-alt", color: "#264de4" },
    { name: "SASS", fa: "fab fa-sass", color: "#cd6799" },
    { name: "JAVASCRIPT", fa: "fab fa-js-square", color: "#f0db4f" },
    { name: "REACT JS", fa: "fab fa-react", color: "#61DBFB" },
    { name: "GITHUB", fa: "fab fa-github", color: "#ffffff" },
    { name: "NODE JS", fa: "fab fa-node", color: "#3C873A" },
    { name: "Java", fa: "fab fa-java", color: "#f89820" },
    { name: "MongoDB", fa: "fas fa-database", color: "#47A248" },
    { name: "C++", fa: "fas fa-code", color: "#004482" },
    { name: "Next JS", fa: "fas fa-forward", color: "#ffffff" },
    { name: "My SQL", fa: "fas fa-database", color: "#00758f" },
    { name: "Python", fa: "fab fa-python", color: "#3776AB" },
    { name: "DSA", fa: "fas fa-project-diagram", color: "#ffc107" },
    { name: "Bootstrap", fa: "fab fa-bootstrap", color: "#7952B3" },
    { name: "Teamwork", fa: "fas fa-people-group", color: "#17a2b8" },
    { name: "Sports", fa: "fas fa-futbol", color: "#f8f9fa" },
];

export default function Skills() {
    return (
        <section className="skills-section">
            <div className="skills">
                <h2 className="skills-title">Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            {skill.icon ? (
                                <img src={skill.icon} alt={skill.name} />
                            ) : (
                                <i
                                    className={skill.fa}
                                    style={{ fontSize: "2.6rem", color: skill.color || "#fff" }}
                                ></i>
                            )}
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
