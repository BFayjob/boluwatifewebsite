// Introduction.js
import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className="md:grid md:gap-8 md:grid-cols-5">
      {/* Introduction Section */}
      <div className="flex">
        {/* Article 1: Introduction Text (Left) */}
        <article className="self-center py-6 text-center md:text-left md:col-start-1 md:col-end-4">
          <h1 className="mb-3.5 text-gray-600 tracking-wide uppercase font-semibold text-base">HELLO, I'M BOLUWATIFE FAYJOB</h1>
          <p className="mb-4 text-4xl md:text-5xl lg:text-6xl md:leading-tight">I AM PASSIONATE ABOUT CLOUD AND CYBERSECURITY.</p>
          <p class="mb-4 font-semibold">CLOUD SECURITY ENGINEER</p>
        </article>

        {/* Article 2: Image (Right) */}
        <article className="w-1/2 p-8">
          <div className="relative w-full css-esdfm0 e1oudrmi0">
            <img
              className="rounded-full h-48 w-48 object-cover mx-auto"
              src="convopic.jpg"
              alt="Boluwatife Fayjob"
            />
          </div>
        </article>
      </div>

      {/* Skills Section */}
      <section className="skills">
        <Skills />
      </section>

      {/* About Section */}
      <section className="px-6 sm:px-10 md:px-24 lg:px-28 py-24 text-center bg-opacity-30 bg-custom-tea md:pt-14 mb-pb-20 css-1vum2is ewajf2h0">
      <h2 className="mb-7 text-gray-800 text-2xl sm:text-3xl md:text-4xl tracking-wide font-semibold">About Me</h2>
        <About />
      </section>

      {/* Projects Section */}
      <section className="projects">
        <Projects />
      </section>
    </div>
  );
};

export default Introduction;
