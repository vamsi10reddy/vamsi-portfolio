// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1
          className="text-xl font-bold cursor-pointer text-blue-400"
          onClick={() => scrollToSection('home')}
        >
          Vamsi Reddy
        </h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none text-black dark:text-white">
            <FaBars />
          </button>
        </div>
        <ul className={`md:flex md:gap-6 md:items-center ${isOpen ? 'block' : 'hidden'} md:block text-center md:text-left mt-4 md:mt-0`}>          
          {[
            'home',
            'about',
            'skills',
            'work',
            'projects',
            'certifications',
            'resume',
            'contact'
          ].map((section) => (
            <li key={section} className="my-2 md:my-0">
              <button
                className="capitalize hover:text-blue-500 transition-colors"
                onClick={() => scrollToSection(section)}
              >
                {section}
              </button>
            </li>
          ))}
          <li>
            <button onClick={toggleDarkMode} className="text-xl ml-4" title="Toggle Dark Mode">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
