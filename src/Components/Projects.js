// Projects.js
import React from 'react';
import ProjectCard from './ProjectCard'; // You'll create this component separately

export const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      {/* Project Cards */}
      <ProjectCard />
      {/* Add more Project Cards as needed */}
    </section>
  );
};

export default Projects;
