import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      role: 'Full Stack Java Developer',
      company: 'AT&T Services Inc., USA',
      date: 'Jan 2023 – Present',
      techStack: ['Java', 'Spring Boot', 'React', 'GraphQL', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'MongoDB', 'Neo4j'],
      points: [
        'Replaced legacy systems with Spring Boot microservices to improve scalability.',
        'Built APIs with REST/GraphQL for telecom platforms.',
        'Created dynamic UIs using React and Angular.',
        'Used Docker, Kubernetes, and Jenkins for cloud-native deployments.',
        'Integrated Neo4j for graph-based network visualization.',
      ],
    },
    {
      role: 'Java Developer',
      company: 'Intex Technologies Ltd, India',
      date: 'Feb 2019 – Aug 2021',
      techStack: ['Java', 'Spring Boot', 'MySQL', 'React', 'AWS', 'Selenium'],
      points: [
        'Developed backend services and REST APIs using Spring Boot.',
        'Worked with React for building responsive UI components.',
        'Optimized SQL queries and indexing strategies.',
        'Deployed apps on AWS with EC2, Lambda, and S3.',
        'Automated UI tests with Selenium WebDriver.',
      ],
    },
  ];

  return (
    <section id="experience" className="bg-gradient-to-b from-purple-100 to-violet-200 py-20 px-4 text-slate-800">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center text-5xl text-blue-900 mb-4 animate-pulse">
            <FaBriefcase />
          </div>
          <h2 className="text-4xl font-extrabold text-violet-800">Work Experience</h2>
          <p className="text-md text-purple-700 mt-2">Here’s a glimpse into my professional journey</p>
        </div>

        {/* Experience Cards */}
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border-l-4 border-violet-600 shadow-md mb-10 p-6 transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-violet-400 hover:shadow-lg group"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <p className="text-sm text-violet-600 font-medium">{exp.date}</p>
            <h3 className="text-xl font-bold text-slate-800 mt-1 group-hover:text-violet-800">{exp.role}</h3>
            <p className="text-md italic text-purple-700 mb-4">{exp.company}</p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {exp.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-indigo-100 text-indigo-800 group-hover:bg-indigo-200 group-hover:text-indigo-900 text-xs font-medium px-3 py-0.5 rounded-full transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Bullet Points */}
            <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
