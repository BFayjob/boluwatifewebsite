// Skills.js
import React from 'react';
import './Skills.css';

const skillsList = [
  'JavaScript', 'CSS', 'AWS Amplify', 'Firebase', 'React.js',
  'Qualys', 'Active Directory', 'Incident Response', 'Networking'
  // Add any additional skills here
];

const Skills = () => {
  return (
    <section className="skills-and-experiences">
      <div className="skills">
        <h2>Skills</h2>
        <p className="intro-text">I have experience working with the following technologies:</p>
        <ul className="skills-list">
          {skillsList.map((skill, index) => (
            <li key={index} className="px-4 py-2 m-3 text-xs font-semibold text-indigo-900 rounded-full bg-indigo-50 md:px-8 md:py-4 md:m-4 md:text-sm">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      {/* Experiences Component */}
    </section>
  );
};

export default Skills;
