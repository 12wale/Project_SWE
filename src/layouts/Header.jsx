import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import logo from '../assets/logo.png';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Tickets', path: '/tickets' },
    { name: 'Souvenirs', path: '/souvenirs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-slate-900 border-b-2 border-yellow-600 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className='flex items-center'>
          <img src={logo} className='w-20 ' alt="logo" />
          <Link to="/" className="text-2xl md:text-3xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors duration-300 cinzel-decorative tracking-wider">
            Grand Egyptian Museum
          </Link>
        </div>
        

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
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
          
          {/* Cart Icon */}
          <Link 
            to="/cart" 
            className="relative text-gray-300 hover:text-yellow-500 transition-colors duration-300"
          >
            <ShoppingBag className="w-6 h-6" />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-gray-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-500 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
            <Link
              to="/auth"
              className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold 
                       px-3 py-2 rounded-md text-center transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Login / Sign Up
            </Link>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-yellow-600/30">
          <div className="flex flex-col px-4 py-2 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-yellow-500 hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;