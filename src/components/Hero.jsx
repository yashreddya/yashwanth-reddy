import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaDownload } from 'react-icons/fa';
import profilePic from '../assets/profile.jpeg';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 md:px-20 py-16 gap-20"
      data-aos="fade-up"
    >
      {/* Left content */}
      <div className="max-w-xl animate__animated animate__fadeInLeft">
        <h2 className="text-6xl font-extrabold text-gray-900 mb-6">
          Hi, I’m <span className="text-blue-700">Pooja Masuram</span>{' '}
          <span role="img" aria-label="waving hand" className="animate-wave inline-block">👋</span>
        </h2>
        <p className="text-xl text-gray-800 mb-8 leading-relaxed max-w-lg">
          A passionate and detail-oriented UI Developer with 2+ years of experience crafting
          beautiful, responsive, and user-friendly web applications. Skilled in React.js, JavaScript,
          and Figma, I love turning complex ideas into intuitive digital experiences that delight
          users and drive business success. Let’s build something amazing together!
        </p>

        <div className="space-y-4 text-gray-700 text-lg mb-8">
          <p className="flex items-center justify-center md:justify-start gap-3">
            <FaMapMarkerAlt className="text-pink-600" /> Atlanta, GA
          </p>
          <p className="flex items-center justify-center md:justify-start gap-3">
            <FaPhoneAlt className="text-pink-600" /> (913)-712-6982
          </p>
          <p className="flex items-center justify-center md:justify-start gap-3">
            <FaEnvelope className="text-pink-600" /> poojamasuram11@gmail.com
          </p>
        </div>

        <a
          href="/Pooja_Masuram.pdf"  // Make sure your resume PDF is in the public folder
          download
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 text-lg"
        >
          Download Resume
          <FaDownload className="ml-3 w-5 h-5" />
        </a>
      </div>

      {/* Right image with glowing animated border */}
      <div
        className="max-w-md rounded-full overflow-hidden shadow-2xl ring-8 ring-blue-400 ring-opacity-70 animate-pulse"
        style={{ animationDuration: '3s' }}
      >
        <img
          src={profilePic}
          alt="Pooja Masuram"
          className="w-[32rem] h-[32rem] object-cover rounded-full border-4 border-blue-600"
          loading="lazy"
        />
      </div>
    </section>
  );
}
