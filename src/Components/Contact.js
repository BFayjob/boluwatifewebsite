// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <article className="relative bg-gradient-to-b from-warm-light to-warm-dark text-gray-800 py-12 flex flex-col items-center rounded-t-[50%]">

      {/* Call to Action */}
      <article className="mb-8">
        <p className="mb-7 text-3xl sm:text-4xl md:text-5xl tracking-wide font-bold text-custom-purple">
          Are you ready to see what I can do?
        </p>
      </article>

      {/* Introduction */}
      <div className="flex items-center mb-6">
        {/* Left Article for Image */}
        <article className="w-1/2 pr-4">
          {/* Include your image here */}
          <img className="self-center w-3/4 mx-auto mb-4 md:mb-0 md:mx-0 md:w-full" src="IMG_4590.jpg" alt="Your" />
        </article>

        {/* Right Article for Text */}
        <article className="self-center text-center md:text-left">
          <p className="mb-3 text-xl font-bold md:leading-7 md:text-lg text-custom-purple">
            I'm actively open to new opportunities. 
          </p>
          <p className="mb-3 text-xl font-bold md:leading-7 md:text-lg text-custom-purple">
            If you have a question, or just want to say hi, I will get back to you as soon as possible.
          </p>
        </article>
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center space-x-4 mt-6">
        <a href="https://www.instagram.com/bojyaf/" target="_blank" rel="noopener noreferrer">
          <img className="w-8 h-8" src="instagram.png" alt="Instagram" />
        </a>
        <a href="mailto:boluwatife.fayjob@outlook.com">
          <img className="w-8 h-8" src="gmail.png" alt="Email" />
        </a>
        <a href="https://twitter.com/BOJYAF" target="_blank" rel="noopener noreferrer">
          <img className="w-8 h-8" src="twitter.png" alt="Twitter" />
        </a>
        <a href="https://discord.com/channels/@bojyaf" target="_blank" rel="noopener noreferrer">
          <img className="w-8 h-8" src="discord.png" alt="Discord" />
        </a>
        <a href="https://github.com/BFayjob" target="_blank" rel="noopener noreferrer">
          <img className="w-8 h-8" src="github.png" alt="GitHub" />
        </a>
      </div>

      {/* Permanent Contact Details */}
      <div className="fixed bottom-0 left-0 p-4 flex flex-col items-start space-y-4 bg-white text-white">
        <h2 className="text-2xl font-bold">Contact</h2>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a href="https://www.instagram.com/bojyaf/" target="_blank" rel="noopener noreferrer">
            <img className="w-8 h-8" src="instagram.png" alt="Instagram" />
          </a>
          <a href="mailto:boluwatife.fayjob@outlook.com">
            <img className="w-8 h-8" src="gmail.png" alt="Email" />
          </a>
          <a href="https://twitter.com/BOJYAF" target="_blank" rel="noopener noreferrer">
            <img className="w-8 h-8" src="twitter.png" alt="Twitter" />
          </a>
          <a href="https://discord.com/channels/@bojyaf" target="_blank" rel="noopener noreferrer">
            <img className="w-8 h-8" src="discord.png" alt="Discord" />
          </a>
          <a href="https://github.com/BFayjob" target="_blank" rel="noopener noreferrer">
            <img className="w-8 h-8" src="github.png" alt="GitHub" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <article className="mt-auto">
        <p className="text-gray-400">&copy; 2024 Boluwatife Fayjob</p>
      </article>
    </article>
  );
};

export default Contact;
