// MobileNav.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import { routes } from '../routes';

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      {isOpen && (
        <div className="absolute top-16 right-0 bg-white p-4 border shadow-md rounded-md">
          <ul className="flex flex-col space-y-4">
            {routes.map((route) => (
              <li key={route.title}>
                <NavLink
                  to={route.href}
                  className="text-black hover:text-gray-700 hover:underline transition duration-300"
                  onClick={() => setOpen(false)}
                >
                  {route.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
