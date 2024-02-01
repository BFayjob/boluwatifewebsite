// ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, skills, imageUrl, projectUrl }) => {
  return (
    <div className="project-card">
      <div className="project-description">
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          <h3>{title}</h3>
        </a>
        <p className="project-skills">Skills gained: {skills}</p>
        <p>{description}</p>
      </div>
      <div className="project-image-container">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

export default ProjectCard;