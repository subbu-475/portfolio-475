import React from 'react';
import {skillDataFrontEnd,skillDataBackEnd} from '../utils/SkillData';

function MySkills() {
  return (
    <div id="services">
        <div className="container">
            <h1 className="sub-title" id="my-ski">My Skills</h1>
            <div className="services-list">
                <div className="skills-static">
                    <img src="./icons/frontend.ico" className="fa-solid fa-code" />
                    <h2>web development Frontend</h2>
                    {skillDataFrontEnd.map((skill)=>
                        <ul>
                            <li>
                                <div>
                                    <img src={skill.image} class="allign-img js-img" />
                                    <p class="skill-align">{skill.skill}</p>
                                </div>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="skills-static">
                    <img src="./icons/backend.ico" className="fa-solid fa-crop" />
                    <h2>web development Backend</h2>
                    {skillDataBackEnd.map((skill)=>
                        <ul>
                            <li>
                                <div>
                                    <img src={skill.image} class="js-img allign-img" />
                                    <p class="skill-align">{skill.skill}</p>
                                </div>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default MySkills;