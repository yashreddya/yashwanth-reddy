import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';

export default function Projects() {
  const projectList = [
    {
      title: 'Real-Time Social Media Dashboard',
      description:
        'Built with React.js, Firebase, and Chart.js for live analytics and clean UI. Features include engagement tracking, scheduling, dynamic chart visualizations, and real-time content management.',
      color: 'from-purple-100 to-purple-200'
    },
    {
      title: 'E-Commerce Store with Payments',
      description:
        'Developed with React.js, MongoDB, Node.js, and Stripe integration. Includes product listings, filtering, secure checkout, order tracking, and admin dashboards.',
      color: 'from-purple-100 to-purple-200'
    },
  ];

  return (
    <section
      id="projects"
      className="bg-white py-20 px-6 text-gray-800"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-4 text-purple-600 text-4xl animate-pulse">
          <FaLaptopCode />
        </div>
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="zoom-in">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projectList.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${project.color} p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform duration-500 ease-in-out`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
