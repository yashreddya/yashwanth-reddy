import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';

export default function Projects() {
  const projectList = [
    {
      title: 'E-Commerce Order Management',
      stack: ['Java', 'Spring Boot', 'MySQL', 'React', 'AWS'],
      description:
        'Built a scalable backend to handle online orders, payments, and shipment tracking. Integrated Stripe API for secure payment processing and used AWS S3 for invoice storage. Ensured modularity using Spring Boot microservices architecture.',
      icon: '🛒',
      bg: 'bg-pink-50 border-pink-400',
    },
    {
      title: 'Employee Self-Service Portal',
      stack: ['Java', 'Spring Security', 'Thymeleaf', 'PostgreSQL'],
      description:
        'Developed a secure HR portal for leave requests, payslip downloads, and employee feedback tracking. Implemented JWT and role-based access control using Spring Security. Used PostgreSQL as the backend database with server-side rendering via Thymeleaf.',
      icon: '👤',
      bg: 'bg-green-50 border-green-400',
    },
    {
      title: 'Real-Time Chat Application',
      stack: ['Java', 'WebSocket', 'React', 'MongoDB', 'Docker'],
      description:
        'Engineered a full-duplex real-time messaging system with typing indicators and persistent chat history. Dockerized the services and used MongoDB Atlas for storing messages. Leveraged WebSocket for seamless bidirectional communication.',
      icon: '💬',
      bg: 'bg-yellow-50 border-yellow-400',
    },
    {
      title: 'Project Time Tracker Dashboard',
      stack: ['Java', 'Spring Boot', 'React', 'Chart.js', 'MySQL'],
      description:
        'Built a web dashboard to log developer hours and track team productivity across tasks. Integrated Chart.js for real-time visual reporting and enabled Excel exports for timesheet tracking. Backend APIs were powered by Spring Boot with MySQL for storage.',
      icon: '📊',
      bg: 'bg-indigo-50 border-indigo-400',
    },
  ];

  const tagColorMap = {
    Java: 'bg-yellow-100 text-yellow-800',
    'Spring Boot': 'bg-green-100 text-green-800',
    'Spring Security': 'bg-green-100 text-green-800',
    Thymeleaf: 'bg-pink-100 text-pink-800',
    React: 'bg-blue-100 text-blue-800',
    WebSocket: 'bg-indigo-100 text-indigo-800',
    MongoDB: 'bg-emerald-100 text-emerald-800',
    MySQL: 'bg-cyan-100 text-cyan-800',
    PostgreSQL: 'bg-blue-100 text-blue-800',
    Docker: 'bg-sky-100 text-sky-800',
    AWS: 'bg-orange-100 text-orange-800',
    'Chart.js': 'bg-purple-100 text-purple-800',
  };

  return (
    <section id="projects" className="bg-white py-20 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center text-5xl text-indigo-700 mb-4">
            <FaLaptopCode />
          </div>
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-2">
            Java Projects
          </h2>
          <p className="text-md text-indigo-600">
            End-to-end applications built using Spring Boot and React
          </p>
        </div>

        {/* Project Cards in Column Layout */}
        <div className="flex flex-col space-y-8">
          {projectList.map((proj, index) => (
            <div
              key={index}
              className={`relative ${proj.bg} border-l-4 rounded-xl p-6 transition-all hover:shadow-lg hover:scale-[1.01] duration-300`}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {/* Icon */}
              <div className="absolute -left-7 top-4 text-2xl">{proj.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {proj.title}
              </h3>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {proj.stack.map((tech, i) => (
                  <span
                    key={i}
                    className={`text-xs font-medium px-3 py-1 rounded-full ${tagColorMap[tech] || 'bg-gray-200 text-gray-800'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-700 leading-relaxed">
                {proj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
