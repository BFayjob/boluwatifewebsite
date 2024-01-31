// About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2>About Me</h2>

        <p>
          A proactive professional navigating the realms of Cloud Security and Software Development. My journey commenced over a year ago, marked by a pivotal internship at MTN Telecommunications PLC.
        </p>

        <p>
          During this transformative experience, I honed my skills in network monitoring, vulnerability assessment, and incident response. It laid the groundwork for my commitment to cybersecurity.
        </p>

        <p>
          In 2023, I transitioned to Software Engineering, spearheading a successful project – an inventory management web app for my parent's company. This endeavor ignited my passion for web development using popular frameworks like React, forming the bedrock of my software development skills.
        </p>

        <p>
          Expanding my horizons, I ventured into cloud technologies, hosting the web app on AWS and Google Firebase. Despite this diverse skill set, my heart remains in cybersecurity. I aspire to evolve into a Cloud Security Engineer, blending innovative problem-solving with a deep understanding of cybersecurity.
        </p>

        <p>
          My professional journey reflects a fusion of hands-on cybersecurity experiences and adept software development skills. As I actively seek opportunities, I'm eager to contribute to meaningful projects and collaborate with exceptional individuals. If you're in search of a candidate who combines technical prowess with a commitment to excellence, I would be delighted to connect.
        </p>

        {/* Optional: You can include the image here if needed */}
        {/* <img src="path-to-your-illustration-image.jpg" alt="Illustration" /> */}
      </div>
    </section>
  );
};

export default About;
