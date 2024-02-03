// ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, skills, imageUrl, projectUrl }) => {
  return (
    <div className="grid grid-cols-1 mb-10 md:mb-6 gap-y-4 md:gap-y-16 gap-x-8 md:grid-cols-5 css-1iciww0 e1uzzknm1">
      <div className="md:w-1/2">
        <div className="p-6">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="mb-2 text-lg font-semibold text-gray-800 uppercase sm:text-xl md:text-2xl">
            {title}
          </a>
          <p className="text-gray-600 mb-4">Skills gained: {skills}</p>
          <p className=' mb-4 text-base leading-6 text-gray-700'>{description}</p>
        </div>
      </div>
      
    </div>
  );
};

export default ProjectCard;