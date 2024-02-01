// Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css'; // Import the CSS file for styling
import './Skills.css';


const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <ProjectCard />
      {/* Add more Project Cards as needed */}
    </section>
  );
};

export default Projects;
