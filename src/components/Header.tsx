import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-slate-900">TechIntegrator</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 font-medium">
              Home
            </a>
            <a href="#services" className="text-gray-700 font-medium">
              Services
            </a>
            <a href="#about" className="text-gray-700 font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 font-medium">
              Contact
            </a>
            
            {/* Language Selector */}
            <div className="flex items-center space-x-1 text-gray-700">
              <Globe className="w-4 h-4" />
              <span className="font-medium">ES</span>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 font-medium">
                Home
              </a>
              <a href="#services" className="text-gray-700 font-medium">
                Services
              </a>
              <a href="#about" className="text-gray-700 font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 font-medium">
                Contact
              </a>
              <div className="flex items-center space-x-1 text-gray-700">
                <Globe className="w-4 h-4" />
                <span className="font-medium">ES</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;