import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import logo from '../assets/logo.png';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Souvenirs', path: '/souvenirs' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data) setUser(JSON.parse(data));
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.profile-dropdown')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/auth');
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-slate-900 border-b-2 border-yellow-600 sticky top-0 z-50 shadow-xl backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-1 sm:gap-2">
          <img 
            src={logo} 
            className="w-12 sm:w-16 md:w-20 hover:scale-105 transition-transform duration-300" 
            alt="logo" 
          />
          <Link 
            to="/" 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors duration-300 cinzel-decorative tracking-wide sm:tracking-wider drop-shadow-lg"
          >
            Grand Egyptian Museum
          </Link>
        </div>

        {/* Desktop Navigation - تظهر فقط على شاشات lg فما فوق */}
        <nav className="hidden lg:flex items-center space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="relative text-gray-300 font-medium text-base lg:text-lg tracking-wide hover:text-yellow-400 transition-colors duration-300 group px-2 lg:px-0"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {user ? (
            <div className="relative ml-2 lg:ml-6 profile-dropdown">
              {/* Avatar Button */}
              <button 
                className="flex items-center focus:outline-none" 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  setIsDropdownOpen(!isDropdownOpen); 
                }}
              >
                <img 
                  src={user.image || `https://ui-avatars.com/api/?name=${user.name}`} 
                  alt="user" 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-yellow-500 object-cover cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg" 
                />
              </button>

              {/* Dropdown Menu */}
              <div 
                className={`absolute right-0 mt-3 w-48 lg:w-56 bg-slate-800 border border-yellow-600 rounded-xl shadow-2xl transform transition-all duration-300 origin-top-right ${isDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
              >
                <div className="absolute -top-2 right-4 w-4 h-4 rotate-45 bg-slate-800 border-l border-t border-yellow-600"></div>

                <Link 
                  to="/dashboard" 
                  className="block px-4 py-3 text-sm lg:text-base text-gray-200 hover:bg-gray-700 hover:text-yellow-400 rounded-lg transition-colors duration-300" 
                  onClick={() => setIsDropdownOpen(false)}
                >
                  My Profile
                </Link>
                <Link 
                  to="/tickets" 
                  className="block px-4 py-3 text-sm lg:text-base text-gray-200 hover:bg-gray-700 hover:text-yellow-400 rounded-lg transition-colors duration-300" 
                  onClick={() => setIsDropdownOpen(false)}
                >
                  My Tickets
                </Link>
                <button 
                  onClick={handleLogout} 
                  className="w-full text-left px-4 py-3 text-sm lg:text-base text-red-400 hover:bg-gray-700 hover:text-red-500 rounded-lg transition-colors duration-300"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link 
              to="/auth" 
              className="
                cinzel-decorative 
                text-xs 
                sm:text-sm 
                md:text-base 
                lg:text-lg
                px-3 
                sm:px-4 
                md:px-5 
                py-1.5 
                sm:py-2 
                md:py-2.5
                font-semibold 
                text-yellow-300 
                bg-white/5 
                backdrop-blur-lg 
                border 
                border-yellow-500/40 
                rounded-xl 
                md:rounded-2xl
                shadow-[0_0_15px_rgba(255,215,0,0.3)] 
                transition-all 
                duration-300 
                hover:bg-yellow-400 
                hover:text-black 
                hover:shadow-[0_0_20px_rgba(255,215,0,0.7)] 
                hover:-translate-y-0.5 
                active:scale-95
                whitespace-nowrap
                flex 
                items-center 
                justify-center
                min-w-[120px]
                sm:min-w-[140px]
                md:min-w-[160px]
              "
            >
              Login / Sign Up
            </Link>
          )}
          
          {/* Cart Icon */}
          <Link 
            to="/cart" 
            className="relative text-gray-300 hover:text-yellow-500 transition-colors duration-300 ml-2 lg:ml-4"
          >
            <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-gray-900 text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Button - يظهر على شاشات أقل من lg */}
        <div className="lg:hidden flex items-center gap-3">
          {/* Cart Icon (Mobile) */}
          <Link 
            to="/cart" 
            className="relative text-gray-300 hover:text-yellow-500 transition-colors duration-300"
          >
            <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-gray-900 text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>
          
          <button 
            className="text-yellow-500 focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-7 h-7 sm:w-8 sm:h-8" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - تظهر على شاشات أقل من lg */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 border-t border-yellow-600/30 shadow-lg animate-fade-in">
          <div className="flex flex-col px-4 py-3 space-y-3">
            {/* Links */}
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-gray-300 hover:text-yellow-500 hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors duration-300 text-base sm:text-lg" 
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {user ? (
              <>
                <div className="flex items-center gap-3 px-4 py-3 border-t border-gray-700 pt-3">
                  <img 
                    src={user.image || `https://ui-avatars.com/api/?name=${user.name}`} 
                    alt="user" 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-yellow-500 object-cover shadow-md" 
                  />
                  <div>
                    <span className="text-yellow-400 font-semibold text-base sm:text-lg block">
                      {user.name}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {user.email}
                    </span>
                  </div>
                </div>

                <Link 
                  to="/dashboard" 
                  className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2.5 rounded-lg font-semibold shadow-md transition hover:scale-105 text-center text-sm sm:text-base" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Profile
                </Link>
                <Link 
                  to="/tickets" 
                  className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2.5 rounded-lg font-semibold shadow-md transition hover:scale-105 text-center text-sm sm:text-base" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Tickets
                </Link>
                <button 
                  onClick={() => { handleLogout(); setIsMenuOpen(false); }} 
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-lg font-semibold shadow-md transition hover:scale-105 text-sm sm:text-base"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/auth" 
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2.5 rounded-lg font-semibold shadow-md transition hover:scale-105 text-center text-sm sm:text-base" 
                onClick={() => setIsMenuOpen(false)}
              >
                Login / Sign Up
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;