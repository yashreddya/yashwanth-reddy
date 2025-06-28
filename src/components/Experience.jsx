import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Developer / Frontend Developer',
      company: 'McKinsey & Company, GA',
      date: 'Mar 2025 – Present',
      techStack: ['React', 'Redux', 'Context API', 'Figma'],
      points: [
        'Led scalable UI development using React, Redux, and Context API.',
        'Applied Design Thinking principles to drive UI/UX improvements.',
        'Created storyboards, high-fidelity mockups, and clickable prototypes with Figma.',
        'Boosted performance via DOM optimization, code splitting, and lazy loading.',
        'Collaborated cross-functionally to deliver seamless, responsive interfaces.',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Airbnb, India',
      date: 'Aug 2021 – Dec 2022',
      techStack: ['React.js', 'HTML5', 'CSS3', 'REST APIs', 'Figma'],
      points: [
        'Developed mobile-first UIs with React.js, HTML5, and CSS3.',
        'Used Figma for visual design and quick UI iterations based on UX feedback.',
        'Integrated RESTful APIs for real-time data flow and smooth interaction.',
        'Improved cross-browser compatibility and optimized load performance.',
        'Contributed to design system updates and reusable component libraries.',
      ],
    },
    {
      role: 'Frontend Developer Intern',
      company: 'Trigent Software, India',
      date: 'Feb 2021 – Jul 2021',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Figma'],
      points: [
        'Designed and built responsive e-commerce UI interfaces.',
        'Collaborated in agile teams and contributed to daily sprint ceremonies.',
        'Created wireframes and visuals using Figma for user testing.',
        'Participated in usability testing and frontend bug resolution.',
      ],
    },
  ];

  return (
    <section id="experience" className="bg-white py-20 px-6 text-gray-800" data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-4 text-blue-600 text-4xl animate-bounce">
          <FaBriefcase />
        </div>
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="zoom-in">Experience</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out"
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className="flex items-center gap-2 mb-1 text-blue-700">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
              </div>
              <p className="text-sm text-gray-600 italic">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-2">{exp.date}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {exp.techStack.map((tech, idt) => (
                  <span
                    key={idt}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {exp.points.map((point, idx) => (
                  <li key={idx} data-aos="fade-up" data-aos-delay={`${idx * 100}`}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
