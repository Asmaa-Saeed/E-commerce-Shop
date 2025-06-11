import React, { useState } from 'react';
import logo from '../assets/Logo/logo.png';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
    `text-black hover:border-b-2 hover:border-teal-700 transition-all duration-400 ease-in-out font-medium ${
      isActive ? 'text-teal-600' : ''
    }`;

  return (
    <nav className="relative bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src={logo} alt="ShopCart Logo" className="w-30 h-15" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/home" className={navLinkStyles}>Home</NavLink>
            <NavLink to="/shop" className={navLinkStyles}>Shop</NavLink>
            <NavLink to="/cart" className={navLinkStyles}>Cart</NavLink>
            <NavLink to="/blog" className={navLinkStyles}>Blog</NavLink>
            <NavLink to="/about" className={navLinkStyles}>About</NavLink>
            <NavLink to="/contact" className={navLinkStyles}>Contact</NavLink>
          </div>

          {/* Login Button - Desktop */}
          <div className="hidden md:block">
            <NavLink to="/login" className="flex items-center bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 cursor-pointer duration-200 ease-in-out">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Login
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <NavLink to="/login" onClick={toggleMenu} className="text-gray-600 cursor-pointer hover:text-teal-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
          <div className="flex flex-col space-y-4 pb-4">
            <NavLink to="/home" className={navLinkStyles} onClick={handleNavLinkClick}>Home</NavLink>
            <NavLink to="/shop" className={navLinkStyles} onClick={handleNavLinkClick}>Shop</NavLink>
            <NavLink to="/cart" className={navLinkStyles} onClick={handleNavLinkClick}>Cart</NavLink>
            <NavLink to="/blog" className={navLinkStyles} onClick={handleNavLinkClick}>Blog</NavLink>
            <NavLink to="/about" className={navLinkStyles} onClick={handleNavLinkClick}>About</NavLink>
            <NavLink to="/contact" className={navLinkStyles} onClick={handleNavLinkClick}>Contact</NavLink>
            <button className="flex items-center justify-center bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-800 duration-200 ease-in-out w-full  cursor-pointer">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Login
            </button>
            <NavLink to="/login" className={navLinkStyles} onClick={handleNavLinkClick}>Login</NavLink>
            <NavLink to="/cart" className="ml-4 relative" onClick={handleNavLinkClick}>
              <svg 
                className="w-6 h-6 text-gray-700 hover:text-teal-600 transition-colors duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
              <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {useCart().getTotalItems()}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;