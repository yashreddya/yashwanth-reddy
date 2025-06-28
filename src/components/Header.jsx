import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { id: 'about', label: 'About', color: 'text-pink-600 hover:text-pink-800' },
    { id: 'skills', label: 'Skills', color: 'text-yellow-600 hover:text-yellow-800' },
    { id: 'experience', label: 'Experience', color: 'text-green-600 hover:text-green-800' },
    { id: 'projects', label: 'Projects', color: 'text-purple-600 hover:text-purple-800' },
    { id: 'contact', label: 'Contact', color: 'text-blue-600 hover:text-blue-800' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer">
          <a href="#home">Yash Arravapula</a>
        </h1>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>

        {/* Navigation (desktop & mobile combined) */}
        <nav
          className={`
            md:flex md:items-center md:gap-4
            absolute md:static top-full left-0 w-full md:w-auto bg-white border-t md:border-none shadow-md md:shadow-none transition-all duration-300 ease-in-out
            ${menuOpen ? 'block' : 'hidden'} md:block
          `}
        >
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.id}`}
              className={`block px-6 py-4 md:py-0 md:px-3 font-medium transition-colors duration-200 ${item.color}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
