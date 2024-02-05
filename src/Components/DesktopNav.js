// DesktopNav.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../routes';

const DesktopNav = () => (
  <ul className="hidden lg:flex space-x-6">
    {routes.map((route) => (
      
      <li key={route.title}>
        <NavLink
          to={route.href}
          exact
          className="text-black hover:text-gray-700 hover:underline transition duration-300 transform hover:scale-105"
        >
          {route.title}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default DesktopNav;
