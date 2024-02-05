import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, skills, imageUrl, projectUrl }) => {
  return (
    <div className="project-card">
      {/* Wrap the entire card content in a flex container */}
      <div className="project-card-inner d-flex">
        {/* Image section on the left */}
        <div className="project-image-container">
          <img className="project-image" src={imageUrl} alt={title} />
        </div>
        {/* Content section on the right */}
        <div className="project-content">
          {/* Wrap the title in a link for navigation */}
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            <h3 className="project-title">{title}</h3>
          </a>
          <p className="project-description">{description}</p>
          <div className="project-skills">
            <span>Skills:</span>
            {skills.split(',').map((skill, index) => (
              <span key={index} className="project-skill">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
