import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      role: '.NET Developer',
      company: 'ADP Technology Services, Inc., USA',
      date: 'Jan 2023 – Present',
      techStack: ['C#', '.NET Core', 'React', 'Azure', 'Docker', 'Kubernetes', 'SQL Server'],
      points: [
        'Migrated legacy payroll and HR systems to .NET Core to improve performance and scalability.',
        'Developed responsive UIs using React, TypeScript, HTML5, and CSS3.',
        'Designed secure RESTful and SOAP APIs to integrate with external systems.',
        'Built scalable microservices with ASP.NET Core, containerized via Docker and deployed on Azure using Kubernetes.',
        'Optimized SQL Server, Cassandra, and MongoDB queries to reduce latency in data-heavy applications.',
        'Ensured security compliance (SOC 2, HIPAA) using OAuth2, JWT, and IdentityServer.',
        'Implemented CI/CD pipelines using Jenkins and Git with infrastructure-as-code via Terraform.',
      ],
    },
    {
      role: '.NET Developer',
      company: 'GlobalTech, India',
      date: 'Feb 2019 – Aug 2021',
      techStack: ['ASP.NET MVC', 'C#', 'Angular', 'MySQL', 'AWS', 'Selenium'],
      points: [
        'Developed enterprise-grade web apps using ASP.NET MVC and Angular.',
        'Built REST APIs and microservices to improve modular communication and workflows.',
        'Tuned complex SQL/MySQL queries and indexing strategies to improve performance.',
        'Deployed applications on AWS using EC2, RDS, Lambda, and CloudFormation.',
        'Automated frontend and backend testing with Selenium and NUnit/xUnit.',
        'Collaborated in Agile sprints for story grooming, code reviews, and feature delivery.',
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
