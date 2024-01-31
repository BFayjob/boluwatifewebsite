// Introduction.js
import React from 'react';
import About from './About'; // Import the About component
import Skills from './Skills'; // Import the Skills component
import './Introduction.css'; // Import the CSS file for styling

const Introduction = () => {
  return (
    <div>
      {/* Introduction Section */}
      <section className="introduction">
        <div className="text-section">
          <h1>HELLO, I'M BOLUWATIFE FAYJOB</h1>
          <p>I AM PASSIONATE ABOUT CLOUD AND CYBERSECURITY.</p>
          <p>CLOUD SECURITY ENGINEER</p>
        </div>

        <div className="image-section">
          <img src="path-to-your-image.jpg" alt="Boluwatife Fayjob" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <Skills />
      </section>

      {/* About Section */}
      <section className="about">
        <About />
      </section>
    </div>
  );
};

export default Introduction;
