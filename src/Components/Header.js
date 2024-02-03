// Header.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-white p-4">
      <nav className="flex items-center justify-between">
        <Link to='/' className='logo text-black font-bold text-xl'>
          BOJYAF
        </Link>
        
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to='/'
              exact
              className="text-black hover:text-gray-700 hover:underline transition duration-300 transform hover:scale-105"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/projects'
              className="text-black hover:text-gray-700 hover:underline transition duration-300 transform hover:scale-105"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/notes'
              className="text-black hover:text-gray-700 hover:underline transition duration-300 transform hover:scale-105"
            >
              Notes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
