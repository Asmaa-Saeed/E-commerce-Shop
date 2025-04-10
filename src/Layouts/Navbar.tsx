import React from 'react';
import logo from '../assets/Logo/logo.png';
import { NavLink } from 'react-router-dom';



// Define the type for the Navbar props (if you plan to add props later)
interface NavbarProps {
  // You can add props here if needed, e.g., className: string;
}

// Functional component with TypeScript
const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="flex items-center mr-2">
          <img src={logo} alt="ShopCart Logo" className="w-30 h-15" />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <NavLink to="/home" className={({ isActive }) =>
            `text-black hover:border-b-2 hover:border-teal-700 transition-all duration-200 ease-in-out font-medium ${
              isActive ? 'text-teal-600' : ''
            }`
          }>
          Home
        </NavLink>
        <NavLink to="/shop" className={({ isActive }) =>
            `text-black hover:border-b-2 hover:border-teal-700 transition-all duration-200 ease-in-out font-medium ${
              isActive ? 'text-teal-600' : ''
            }`
          }>
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `text-black hover:border-b-2 hover:border-teal-700 transition-all duration-200 ease-in-out font-medium ${
              isActive ? 'text-teal-600' : ''
            }`
          }>
          Cart
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `text-black hover:border-b-2 hover:border-teal-700 transition-all duration-200 ease-in-out font-medium ${
              isActive ? 'text-teal-600' : ''
            }`
          }
          >
          Blog
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-black hover:border-b-2 hover:border-teal-700 transition-all duration-200 ease-in-out font-medium ${
              isActive ? 'text-teal-600' : ''
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-black hover:border-b-2 hover:border-teal-700 transition-all duration-200 ease-in-out font-medium ${
              isActive ? 'text-teal-600' : ''
            }`
          }
        >
          Contact
        </NavLink>
      </div>

      {/* Login Button */}
      <div>
        <button className="flex items-center cursor-pointer bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 duration-200 ease-in-out">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;