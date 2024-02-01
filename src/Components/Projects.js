// Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectCard.css'; // Make sure to include the CSS for this component
import './Projects.css';

const Projects = () => {
  // Example project data
  const projectData = [
    {
      title: "Portfolio Website",
      description: "This portfolio website showcases my skills and projects.",
      skills: "React.js, HTML, CSS",
      imageUrl: "path-to-portfolio-image.jpg",
      projectUrl: "https://example.com"
    },
    // ... more project objects
  ];

  return (
    <section className="projects">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-subtitle">These are the projects I have worked on.</p>
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
};

export default Projects;