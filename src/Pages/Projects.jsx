import React from 'react';
import NavBar from '../Components/NavBar';
import Work from '../Components/Work';
import Button from '../Components/Button';

const Projects = () => {
  return (
    <div>
      <NavBar />
      <div className="page-width pt-28 pb-10">
        <div className="text-center mb-14">
          <h1 className="text-5xl sm:text-6xl font-bold text-white">
            Projects
          </h1>
          <p className="text-[#f1f1f1] text-lg max-w-3xl mx-auto mt-4">
            Browse select deployments, storefronts, and modern web solutions
            built for performance and polished user experience.
          </p>
        </div>
      </div>
      <Work />
      <div className="page-width text-center py-16">
        <Button text="Discuss a project" to="/contact" className="mt-6" />
      </div>
    </div>
  );
};

export default Projects;
