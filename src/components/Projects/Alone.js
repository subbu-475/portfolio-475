import React from 'react';
import { projects } from '../../utils/Projects';
import { Link } from 'react-router-dom';

function IndividualProjects() {
  return (
    <div id="portfolio">
        <div class="container">
            <h1 class="sub-title" id="proj-col">Projects</h1>
            <div class="work-list">
                {projects.map((project)=>
                    <div class="work">
                        <img src={project.image} />
                        <div class="layer">
                            <h3>{project.title}</h3>
                            <p>{project.abstract}</p>
                        </div>
                    </div>
                )}
            </div>
            <Link to="/" class="btn see-col">Back</Link>
        </div>
    </div>
  )
}

export default IndividualProjects;