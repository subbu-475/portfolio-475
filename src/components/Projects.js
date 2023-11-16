import React from 'react';
import { projects } from '../utils/Projects';
import {Link} from 'react-router-dom';

function Projects() {

    let count = projects.length;
    let projectElements = [];

    for (let i = 0; i < count-1; i++) {
        projectElements.push(
        <div className="work" key={i}>
            <img src={projects[i].image} alt={projects[i].title} />
            <div className="layer">
            <h3>{projects[i].title}</h3>
            <p>{projects[i].abstract}</p>
            </div>
        </div>
        );
    }

  return (
    <div id="portfolio">
        <div className="container">
            <h1 className="sub-title" id="proj-col">Projects</h1>
            <div className="work-list">
                {projectElements}
            </div>
            <Link to ='/projects' className="btn see-col">See more</Link>
        </div>
    </div>
  )
}

export default Projects;