import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Introduction (already defined in your Introduction.js) */}

      {/* About section with light cream background and wavy border animation */}
      <section className="about-section bg-cream rounded-l-lg rounded-b-lg p-8 shadow-md animate-wave">
      <h3 className="text-xl font-medium text-gray-800 mt-2 mb-8 text-center">MY STORY</h3>

        {/* Articles with image-text layout */}
        <div className="about-articles flex flex-col md:flex-row md:gap-16">
          <article className="about-article flex items-center justify-center mr-8 md:mr-0">
            <img
              className="rounded-full h-48 w-48 object-cover"
              src="convopic.jpg"
              alt="Illustration"
            />
          </article>
          <article className="about-article">
            {/* Your text content here */}
            <p className="text-gray-700 mb-4">
              I am a proactive professional navigating the realms of Cloud Security and Software Development. My journey commenced over a year ago, marked by a pivotal internship at MTN Telecommunications PLC.
            </p>
            <p className="text-gray-700 mb-4">
            During this transformative experience, I honed my skills in network monitoring, vulnerability assessment, and incident response. It laid the groundwork for my commitment to cybersecurity.
          </p>

          <p className="text-gray-700 mb-4">
            In 2023, I transitioned to Software Engineering, spearheading a successful project – an inventory management web app for my parent's company. This endeavor ignited my passion for web development using popular frameworks like React, forming the bedrock of my software development skills.
          </p>

          <p className="text-gray-700 mb-4">
            Expanding my horizons, I ventured into cloud technologies, hosting the web app on AWS and Google Firebase. Despite this diverse skill set, my heart remains in cybersecurity. I aspire to evolve into a Cloud Security Engineer, blending innovative problem-solving with a deep understanding of cybersecurity.
          </p>

          <p className="text-gray-700 mb-4">
            My professional journey reflects a fusion of hands-on cybersecurity experiences and adept software development skills. As I actively seek opportunities, I'm eager to contribute to meaningful projects and collaborate with exceptional individuals. If you're in search of a candidate who combines technical prowess with a commitment to excellence, I would be delighted to connect.
          </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
