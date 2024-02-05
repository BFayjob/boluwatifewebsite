import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className="min-h-screen relative background-image">
  <div className="container mx-auto px-4 pt-20 pb-16 grid grid-cols-2 gap-16 justify-items-center items-center">
        {/* Profile Image (Mobile/Desktop) */}
        <div className="lg:col-start-1 col-span-1 flex justify-end mr-10 lg:mr-0">
          <img
            className="rounded-full object-cover shadow-lg"
            src="suitImage.jpg"
            alt="Boluwatife Fayjob"
            width={200}
            height={200}
          />
        </div>

        {/* Introduction Text (Mobile/Desktop) */}
        <div className="lg:col-start-2 col-span-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 lg:mb-8">HELLO, I'M BOLUWATIFE FAYJOB</h1>
          <p className="text-5xl font-bold text-gray-800 mb-4 lg:mb-8">I AM PASSIONATE ABOUT CLOUD AND CYBERSECURITY.</p>
          <p className="text-sm font-bold text-gray-800">CLOUD SECURITY ENGINEER</p>
        </div>
      </div>

      {/* About Me & Skills (Mobile/Desktop) */}
      <div className="w-full lg:w-1/2">
          <Skills />
        </div>
      <div className="container mx-auto px-4 pt-12 flex flex-col lg:flex-row lg:space-x-16">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <About />
        </div>
        
      </div>

     
      <div className="container mx-auto px-4 pt-12  lg:block">
        <Projects />
      </div>

    </div>
  );
};

export default Introduction;
