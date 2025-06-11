import React from "react";
import "./Projects.scss";

function Projects() {
    const projects = [
        {
            title: "Food Delivery App",
            description: "Food delivery web in Next.js with beautiful UI",
            img: "https://static.vecteezy.com/system/resources/previews/002/001/840/non_2x/food-delivery-service-design-vector.jpg",
            link: "https://github.com/ankitjhajhariya/Food-delivery"
        },
        {
            title: "KisanMel",
            description: "React.js project with API integration",
            img: "https://www.kisanmela.in/wp-content/uploads/2024/04/Kissan-mela-2023-3.png",
            link: "https://github.com/Divyanshu7611/kisanmel"
        },
        {
            title: "Spotify Dashboard",
            description: "Spotify UI clone using HTML & CSS",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX0LJ-DOVXDckh_Q_T2XhBQHR90ngMDg3YCw&s",
            link: "https://github.com/ankitjhajhariya/Spotify-web"
        },
        {
            title: "W3villa Clone",
            description: "Clone of W3villa website using React.js",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLnEN9u2gLEk138VwmmecESU3fUR4sMpJMHA&s",
            link: "https://github.com/ankitjhajhariya/w3villa"
        }
    ];

    return (
        <div className="projects">
            {projects.map((project, index) => (
                <div className="card" key={index}>
                    <img src={project.img} className="card-img-top" alt={`${project.title} Preview`} />
                    <div className="card-body">
                        <h3 className="card-title">{project.title}</h3>
                        <p className="card-text">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <button>View Project</button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;
