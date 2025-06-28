import React from 'react';
import { FaUser } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="min-h-[70vh] px-6 py-12 bg-white text-gray-800" data-aos="fade-up">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-4 text-blue-600 text-4xl">
          <FaUser />
        </div>
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed mb-4" data-aos="fade-right">
          I'm an innovative and detail-oriented UI Developer with over 2+ years of experience building responsive and user-centric interfaces. I bring ideas to life using tools like React.js, JavaScript, and Figma while collaborating cross-functionally to improve user journeys.
        </p>
        <p className="text-lg leading-relaxed" data-aos="fade-left">
          My passion lies in transforming designs into intuitive, pixel-perfect web applications. I'm a strong advocate for design thinking, agile methodologies, and delivering seamless experiences that truly engage users.
        </p>
      </div>
    </section>
  );
}
