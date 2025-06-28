import React from 'react';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaNodeJs,
  FaDatabase,
  FaTools,
  FaCode,
  FaSitemap,
  FaDocker,
  FaAws
} from 'react-icons/fa';

import {
  SiTypescript,
  SiRedux,
  SiJest,
  SiTailwindcss,
} from 'react-icons/si';

export default function Skills() {
  return (
    <section
      id="skills"
      data-aos="fade-up"
      data-aos-duration="1000"
      className="px-6 py-20 bg-gray-50 text-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon Header */}
        <div className="flex justify-center mt-6 mb-4 text-blue-600 text-4xl" data-aos="zoom-in" data-aos-delay="200">
          <FaTools />
        </div>
        <h2
          className="text-4xl font-bold mb-10"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-lg text-center">
          <div data-aos="flip-left"><FaReact className="text-3xl mx-auto mb-2 text-blue-500" />React.js</div>
          <div data-aos="flip-right"><FaJs className="text-3xl mx-auto mb-2 text-yellow-500" />JavaScript</div>
          <div data-aos="flip-left"><SiTypescript className="text-3xl mx-auto mb-2 text-blue-700" />TypeScript</div>
          <div data-aos="flip-right"><SiRedux className="text-3xl mx-auto mb-2 text-purple-700" />Redux</div>

          <div data-aos="flip-left"><FaHtml5 className="text-3xl mx-auto mb-2 text-orange-600" />HTML5</div>
          <div data-aos="flip-right"><FaCss3Alt className="text-3xl mx-auto mb-2 text-blue-600" />CSS3</div>
          <div data-aos="flip-left"><SiTailwindcss className="text-3xl mx-auto mb-2 text-teal-400" />Tailwind CSS</div>
          <div data-aos="flip-right"><FaFigma className="text-3xl mx-auto mb-2 text-pink-600" />Figma</div>

          <div data-aos="flip-left"><FaGitAlt className="text-3xl mx-auto mb-2 text-red-600" />Git/GitHub</div>
          <div data-aos="flip-right"><FaNodeJs className="text-3xl mx-auto mb-2 text-green-600" />Node.js</div>
          <div data-aos="flip-left"><FaDatabase className="text-3xl mx-auto mb-2 text-indigo-600" />MongoDB / MySQL</div>
          <div data-aos="flip-right"><FaCode className="text-3xl mx-auto mb-2 text-gray-700" />REST APIs / JSON</div>

          <div data-aos="flip-left"><SiJest className="text-3xl mx-auto mb-2 text-pink-800" />Jest (Testing)</div>
          <div data-aos="flip-right"><FaDocker className="text-3xl mx-auto mb-2 text-blue-500" />Docker</div>
          <div data-aos="flip-left"><FaAws className="text-3xl mx-auto mb-2 text-yellow-500" />AWS Basics</div>
          <div data-aos="flip-right"><FaSitemap className="text-3xl mx-auto mb-2 text-purple-600" />Wireframing</div>

          <div data-aos="flip-left"><FaTools className="text-3xl mx-auto mb-2 text-black" />VS Code / Eclipse</div>
        </div>
      </div>
    </section>
  );
}
