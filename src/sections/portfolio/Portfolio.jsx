import React from "react";
import './portfolio.css';
import ProjectCategories from "./ProjectCategories";
import Projects from "./Projects";
import data from "./data";
import {useState} from "react";

const Portfolio = () => {
    const [projects, setProjects] = useState(data);


    return(
        <section id='portfolio'> <h1> Recent Projects </h1>
        <p>Check out some of the recent projects I worked on. Use the buttons to toggle the different categories.</p>
        <div className="container portfolio__container">
            <ProjectCategories />
            <Projects projects={projects}/>
        </div>
        </section>
    )
}

export default Portfolio;
