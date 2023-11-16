import React, { useState } from 'react';
import Skills from './About/Skills';
import Education from './About/Education1';
import Experience from './About/Experience1';

function About() {

    const[state,setState]=useState("skills");

    const handleClick = (e) => {
      let name = e.target.dataset.name;
  
      // Set the state to the name of the tab link that was clicked on.
      setState(name);
    };

  return (
    <div id="about">
        <div className="container">
            <div className="row">
                <div className="about-col-1">
                    <img src="./images/user1.png"/>
                </div>
                <div className="about-col-2">
                    <h1 className="sub-title">About Me</h1>
                    <p id="about-para">I am a working professional. I'm much more interested in website development and programming. Through the courses, I have gained a lot of knowledges about web development and the Python programming language. I am putting a lot of effort into my passion for web development <span><img src="./icons/heart.ico" id="heart-icon" /></span> and programming.</p>
                    <div className="tab-titles">
                        <p className={`tab-links ${state==='skills'?"active-link":""}`} data-name="skills" onClick={handleClick} >Skills</p>
                        <p className={`tab-links ${state==='education'?"active-link":""}`} data-name="education" onClick={handleClick} >Education</p>
                        <p className={`tab-links ${state==='experience'?"active-link":""}`} data-name="experience" onClick={handleClick} >Experience</p>
                    </div>
                    {state === 'skills' && <Skills />}
                    {state === 'experience' && <Experience />}
                    {state === 'education' && <Education />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;