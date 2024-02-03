// About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <article className="flex p-6 max-w-2xl mx-auto">
      {/* Article 1: Image (Left) */}
      <article className="w-1/2 flex items-center justify-center">
        <img
          className="rounded-full h-48 w-48 object-cover"
          src="convopic.jpg"
          alt="Illustration"
        />
      </article>

      {/* Article 2: Text Content (Right) */}
      <article className="w-1/2 pl-8">
      <h2 className="mb-7 text-gray-800 text-2xl sm:text-3xl md:text-4xl tracking-wide font-semibold">My Story</h2>

        <div className="self-center text-left md:-mt-6 text-custom-purple">

          <p className="mb-4">
            I am a proactive professional navigating the realms of Cloud Security and Software Development. My journey commenced over a year ago, marked by a pivotal internship at MTN Telecommunications PLC.
          </p>

          <p className="mb-4">
            During this transformative experience, I honed my skills in network monitoring, vulnerability assessment, and incident response. It laid the groundwork for my commitment to cybersecurity.
          </p>

          <p className="mb-4">
            In 2023, I transitioned to Software Engineering, spearheading a successful project – an inventory management web app for my parent's company. This endeavor ignited my passion for web development using popular frameworks like React, forming the bedrock of my software development skills.
          </p>

          <p className="mb-4">
            Expanding my horizons, I ventured into cloud technologies, hosting the web app on AWS and Google Firebase. Despite this diverse skill set, my heart remains in cybersecurity. I aspire to evolve into a Cloud Security Engineer, blending innovative problem-solving with a deep understanding of cybersecurity.
          </p>

          <p className="mb-4">
            My professional journey reflects a fusion of hands-on cybersecurity experiences and adept software development skills. As I actively seek opportunities, I'm eager to contribute to meaningful projects and collaborate with exceptional individuals. If you're in search of a candidate who combines technical prowess with a commitment to excellence, I would be delighted to connect.
          </p>
        </div>
      </article>
    </article>
  );
};

export default About;