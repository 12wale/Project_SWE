import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Tickets', path: '/tickets' },
    { name: 'Landmarks', path: '/landmarks' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-slate-900 border-b-2 border-yellow-600 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        {/* <div className="flex items-center gap-3">
          <img src={logo} className="w-16 md:w-20" alt="logo" />
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors duration-300 cinzel-decorative tracking-wider"
          >
            Grand Egyptian Museum
          </Link>
        </div> */}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-300 hover:text-yellow-500 transition-colors duration-300 text-lg font-medium tracking-wide relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Auth Button */}
        <Link
          to="/auth"
          className=" cinzel-decorative hidden md:block px-5 py-2 rounded-b-xl rounded-t-4xl bg-yellow-500/20 border border-yellow-400 
                     text-yellow-300 font-semibold tracking-wide hover:bg-yellow-500/40 
                     hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,215,0,0.6)] 
                     backdrop-blur-md"
        >
          Login / Sign Up
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-500 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-yellow-600/30 animate-slideDown">
          <div className="flex flex-col px-4 py-2 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-yellow-500 hover:bg-gray-700 
                         px-3 py-2 rounded-md transition-colors duration-300 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Auth Button */}
            <Link
              to="/auth"
              className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold 
                       px-3 py-2 rounded-md text-center transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Login / Sign Up
            </Link>
          </div>
        </div>
      )}

      {/* Small animation */}
      <style>
        {`
          @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideDown {
            animation: slideDown 0.25s ease-out;
          }
        `}
      </style>
    </header>
  );
};

export default Header;