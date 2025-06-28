import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer">
          <a href="#home">Pooja Masuram</a>
        </h1>

        {/* Hamburger button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>

        {/* Mobile menu */}
        <nav
          className={`absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 md:static md:flex md:w-auto md:shadow-none md:border-none transition-max-h duration-500 ease-in-out overflow-hidden
          ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}
        >
          <a
            href="#about"
            className="block px-6 py-4 text-gray-700 hover:text-blue-700 md:py-0 md:px-3"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="block px-6 py-4 text-gray-700 hover:text-blue-700 md:py-0 md:px-3"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#experience"
            className="block px-6 py-4 text-gray-700 hover:text-blue-700 md:py-0 md:px-3"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#projects"
            className="block px-6 py-4 text-gray-700 hover:text-blue-700 md:py-0 md:px-3"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-6 py-4 text-gray-700 hover:text-blue-700 md:py-0 md:px-3"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
