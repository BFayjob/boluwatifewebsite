// ProjectCard.js
import React from 'react';
import './Projects.css';
import './Skills.css';


const ProjectCard = () => {
  return (
    <div className="project-card">
      <a href="https://example-project-details-link.com" target="_blank" rel="noopener noreferrer">
        <h3>Portfolio Website</h3>
      </a>
      <p>Skills gained: React.js, HTML, CSS</p>
      <p>
        This portfolio website showcases my skills and projects. It is built using React.js for the front end,
        and the design is crafted with HTML and CSS. The website provides an interactive and visually appealing
        presentation of my professional journey and projects.
      </p>
      <img src="path-to-project-image.jpg" alt="Portfolio Website" />
    </div>
  );
};

export default ProjectCard;
