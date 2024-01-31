// Header.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {

    

  return (
    <header>
      <nav>
      <Link to='/' className='logo'>
        <img src='./GmlBlack.png' alt='GML Logo' />
      </Link>
      
        <ul>
        <li>
          <NavLink to='/' exact>
            Home
          </NavLink>
        </li>
      <li>
          <NavLink to='/projects'>Projects</NavLink>
        </li>

        <li>
          <NavLink to='/notes'>Notes</NavLink>
        </li>

        </ul>
      </nav>
      {/* Your name or logo */}
    </header>
  );
};

export default Header;
