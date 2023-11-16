import React from 'react'

function Header() {
  return (
    <div id="header">
        <div className="container">
            <nav>
                <div>
                    <p id="full-l"><span id="first-l">P</span>ortfolio</p>
                </div>
                <ul id="side-menu">
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Skills</a></li>
                    <li><a href="#portfolio">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <img src="" id="close-ico" className="fa-regular fa-circle-xmark" />
                </ul>
                <img src="./icons/hamburg.ico" className="ham fas" id="ham1"  />
            </nav>
            <div className="header-text">
                <p data-text="Web developer">Web developer</p>
                <h1>Hi, I'm <span>Subramani</span> <br />from Trichy...</h1>
            </div>
        </div>
    </div>
    );
}

export default Header