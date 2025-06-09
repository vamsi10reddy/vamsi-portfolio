import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaHome, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const isHome = location.pathname === "/";
  const isResume = location.pathname === "/resume";

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="w-full py-4 px-6 text-white font-semibold text-xl bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        <Link to="/" onClick={handleLinkClick} className="text-blue-400 hover:text-blue-300 text-xl font-bold">
          Vamsi Reddy
        </Link>

        <div className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {isHome && (
            <>
              <a href="#home" className="hover:text-blue-400">Home</a>
              <a href="#about" className="hover:text-blue-400">About</a>
              <a href="#work" className="hover:text-blue-400">Work</a>
              <a href="#certifications" className="hover:text-blue-400">Certifications</a>
              <a href="#skills" className="hover:text-blue-400">Skills</a>
              <a href="#projects" className="hover:text-blue-400">Projects</a>
              <a href="#contact" className="hover:text-blue-400">Contact</a>
            </>
          )}

          {!isResume && (
            <Link to="/resume" className="hover:text-blue-400">Resume</Link>
          )}

          {isResume && (
            <Link to="/" className="hover:text-blue-400 text-2xl">
              <FaHome />
            </Link>
          )}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 p-2 rounded-full border border-white bg-white text-black dark:bg-gray-800 dark:text-white shadow-lg"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 py-4 rounded-md bg-transparent backdrop-blur-sm text-center space-y-4 text-white transition-all duration-300">
        {isHome && (
            <>
              <a href="#home" onClick={handleLinkClick} className="block hover:text-blue-400">Home</a>
              <a href="#about" onClick={handleLinkClick} className="block hover:text-blue-400">About</a>
              <a href="#work" onClick={handleLinkClick} className="block hover:text-blue-400">Work</a>
              <a href="#certifications" onClick={handleLinkClick} className="block hover:text-blue-400">Certifications</a>
              <a href="#skills" onClick={handleLinkClick} className="block hover:text-blue-400">Skills</a>
              <a href="#projects" onClick={handleLinkClick} className="block hover:text-blue-400">Projects</a>
              <a href="#contact" onClick={handleLinkClick} className="block hover:text-blue-400">Contact</a>
            </>
          )}

          {!isResume && (
            <Link to="/resume" onClick={handleLinkClick} className="block hover:text-blue-400">Resume</Link>
          )}
          {isResume && (
            <Link to="/" onClick={handleLinkClick} className="block hover:text-blue-400 text-2xl">
              <FaHome />
            </Link>
          )}
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setMenuOpen(false);
            }}
            className="mt-2 p-2 rounded-full border border-white bg-white text-black dark:bg-gray-800 dark:text-white shadow-lg"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
