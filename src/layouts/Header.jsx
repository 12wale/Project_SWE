import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} className="w-20 hover:scale-105 transition-transform duration-300" alt="logo" />
          <Link to="/" className="text-2xl md:text-3xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors duration-300 cinzel-decorative tracking-wider drop-shadow-lg">
            Grand Egyptian Museum
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="relative text-gray-300 font-medium text-lg tracking-wide hover:text-yellow-400 transition-colors duration-300 group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {user ? (
            <div className="relative ml-6 profile-dropdown">
              {/* Avatar Button */}
              <button className="flex items-center focus:outline-none" onClick={(e) => { e.stopPropagation(); setIsDropdownOpen(!isDropdownOpen); }}>
                <img src={user.image || `https://ui-avatars.com/api/?name=${user.name}`} alt="user" className="w-10 h-10 rounded-full border-2 border-yellow-500 object-cover cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg" />
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute right-0 mt-3 w-56 bg-slate-800 border border-yellow-600 rounded-xl shadow-2xl transform transition-all duration-300 origin-top-right ${isDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                <div className="absolute -top-2 right-4 w-4 h-4 rotate-45 bg-slate-800 border-l border-t border-yellow-600"></div>

                <Link to="/dashboard" className="block px-5 py-3 text-gray-200 hover:bg-gray-700 hover:text-yellow-400 rounded-lg transition-colors duration-300" onClick={() => setIsDropdownOpen(false)}>My Profile</Link>
                <Link to="/tickets" className="block px-5 py-3 text-gray-200 hover:bg-gray-700 hover:text-yellow-400 rounded-lg transition-colors duration-300" onClick={() => setIsDropdownOpen(false)}>My Tickets</Link>
                <button onClick={handleLogout} className="w-full text-left px-5 py-3 text-red-400 hover:bg-gray-700 hover:text-red-500 rounded-lg transition-colors duration-300">Logout</button>
              </div>
            </div>
          ) : (
            <Link to="/auth" className="cinzel-decorative text-[16px] px-5 py-2 font-semibold text-yellow-300 bg-white/5 backdrop-blur-lg border border-yellow-500/40 rounded-2xl shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_20px_rgba(255,215,0,0.7)] hover:-translate-y-0.5 active:scale-95">Login / Sign Up</Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-yellow-500 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-yellow-600/30 shadow-lg animate-fade-in">
          <div className="flex flex-col px-4 py-2 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-gray-300 hover:text-yellow-500 hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors duration-300 text-lg" onClick={() => setIsMenuOpen(false)}>{link.name}</Link>
            ))}

            {user ? (
              <>
                <div className="flex items-center gap-3 px-4 py-2">
                  <img src={user.image || `https://ui-avatars.com/api/?name=${user.name}`} alt="user" className="w-14 h-14 rounded-full border-2 border-yellow-500 object-cover shadow-md" />
                  <span className="text-yellow-400 font-semibold text-lg">{user.name}</span>
                </div>

                <Link to="/dashboard" className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold shadow-md transition hover:scale-105 text-center" onClick={() => setIsMenuOpen(false)}>My Profile</Link>
                <Link to="/tickets" className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition hover:scale-105 text-center" onClick={() => setIsMenuOpen(false)}>My Tickets</Link>
                <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition hover:scale-105">Logout</button>
              </>
            ) : (
              <Link to="/auth" className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold shadow-md transition hover:scale-105 text-center" onClick={() => setIsMenuOpen(false)}>Login / Sign Up</Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;