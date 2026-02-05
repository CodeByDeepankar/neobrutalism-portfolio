'use client';

import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveSection(item.id)}
              className={`neobrutalist-btn text-xs sm:text-sm md:text-base ${
                activeSection === item.id 
                  ? 'bg-red-600' 
                  : 'bg-black text-white hover:bg-white hover:text-black'
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden neobrutalist-btn bg-black text-white absolute top-0 right-0"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? 'CLOSE' : 'MENU'}
      </button>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <ul className="md:hidden absolute top-full right-0 mt-2 bg-white border-4 border-black shadow-lg z-10 w-48">
          {navItems.map((item) => (
            <li key={item.id} className="w-full border-b-2 border-gray-200 last:border-b-0">
              <button
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`neobrutalist-btn w-full text-left ${
                  activeSection === item.id 
                    ? 'bg-red-600' 
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;