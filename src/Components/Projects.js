// Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectCard.css'; // Make sure to include the CSS for this component
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: "GML Inventory Managment Web App",
      description: "This is an internal inventory managment system. Its function is to keep track of sales and stock record as they are sold. This system is automated therby preventing human errors. ",
      skills: "React.js, javascript, Tailwind CSS, AWS amplify, AWS dynamoDB",
      imageUrl: "gmlLogo.jpeg",
      projectUrl: "https://example.com"
    },
    // ... more project objects
  ];

  return (
    <section className="projects">
      <h2 className="text-3xl font-bold mb-4 projects-title">Projects</h2>
      <p className="text-gray-600 mb-8 projects-subtitle">These are the projects I have worked on.</p>
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
};

export default Projects;