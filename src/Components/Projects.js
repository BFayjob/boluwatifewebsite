import React from 'react';
import ProjectCard from './ProjectCard';

const featuredProjects = [
  {
    title: "GML Inventory Managment Web App",
    description: "This is an internal inventory management system. It automates tracking of sales and stock records, preventing human errors.",
    skills: "React.js, JavaScript, Tailwind CSS, AWS Amplify, AWS DynamoDB",
    imageUrl: "contactImage.jpg",
    projectUrl: "https://example.com",
  },
  // ... Include other featured projects
];

const regularProjects = [
  // ... Include other regular projects
];

const Projects = () => {
  return (
    <section className="projects apple-style">
      {/* Featured Projects Section */}
      <div className="featured-projects-container">
        <h2>Featured Projects</h2>
        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      {/* Regular Projects Section (conditionally rendered) */}
      {regularProjects.length > 0 && (
        <div className="regular-projects-container">
          <h2>Regular Projects</h2>
          <div className="regular-projects">
            {regularProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;