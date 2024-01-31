// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Introduction from './Components/Introduction';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Notes from './Components/Notes';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Introduction />} />

        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/notes" element={<Notes />} />

        {/* Add more routes for additional pages if needed */}
      </Routes>

      {/* Footer */}
      <Contact />
    </div>
  );
};

export default App;
