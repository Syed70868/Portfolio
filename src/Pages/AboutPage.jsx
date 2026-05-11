import React from 'react';
import NavBar from '../Components/NavBar';
import About from '../Components/About';
import Skills from '../Components/Skills';

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-28">
        <About />
        <Skills />
      </div>
    </div>
  );
};

export default AboutPage;
