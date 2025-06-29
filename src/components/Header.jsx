import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Name */}
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800 tracking-wide">
          <a href="#home">Yashwanth Reddy</a>
        </h1>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`md:flex md:gap-6 md:items-center transition-all duration-300 ease-in-out 
                      absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent 
                      shadow-md md:shadow-none border-t md:border-0 ${menuOpen ? 'block' : 'hidden'} md:block`}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 md:py-0 md:px-2 text-gray-700 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-500 transition duration-200 font-medium"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
