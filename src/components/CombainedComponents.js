import React from 'react';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Header from '../components/Header';
import About from '../components/About';
import MySkills from '../components/MySkills';

function CombainedComponents() {
  return (
    <>
        <Header />
        <About />
        <MySkills />
        <Projects />
        <Contact />
    </>
    
  )
}

export default CombainedComponents