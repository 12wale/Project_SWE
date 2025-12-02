import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t-2 border-yellow-600 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-yellow-500 cinzel-decorative tracking-wider">
              Grand Egyptian Museum
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Experience the majesty of ancient Egypt. A bridge between the past and the future, showcasing the world's greatest collection of Pharaonic artifacts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-yellow-500 mb-6 cinzel-decorative">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Tickets', 'Souvenirs', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-sm hover:text-yellow-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-yellow-500 mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-2"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit Info */}
          <div>
            <h3 className="text-lg font-bold text-yellow-500 mb-6 cinzel-decorative">Visit Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1 shrink-0" />
                <span className="text-sm text-gray-400">
                  Alexandria Desert Road,<br />
                  Giza, Egypt
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500 shrink-0" />
                <span className="text-sm text-gray-400">+20 2 3531 7344</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500 shrink-0" />
                <span className="text-sm text-gray-400"> tourism_info@efinance.com.eg</span>
              </li>
            </ul>
          </div>

          
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Grand Egyptian Museum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
