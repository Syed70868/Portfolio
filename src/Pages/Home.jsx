import React from 'react';
import NavBar from '../Components/NavBar';
import Hero from '../Components/Hero';
import Work from '../Components/Work';
import Skills from '../Components/Skills';
import About from '../Components/About';
import Contact from '../Components/Contact';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Work />
      <Skills />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
