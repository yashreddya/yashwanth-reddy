import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';

export default function Projects() {
  const projectList = [
    {
      title: 'Inventory Management System',
      description:
        'Built a role-based web application using ASP.NET Core, Entity Framework, and SQL Server to manage product inventory, supplier records, and audit logs. Includes search, bulk upload, and data export features.',
      color: 'from-blue-100 to-blue-200',
    },
    {
      title: 'Cloud-Based Task Tracker',
      description:
        'Developed a multi-user task tracker using ASP.NET Core Web API and React.js. Integrated JWT authentication and deployed it to Azure App Services with CI/CD using GitHub Actions.',
      color: 'from-green-100 to-green-200',
    },
    {
      title: 'Secure File Sharing Portal',
      description:
        'Engineered a .NET Core and Angular-based document-sharing platform supporting file encryption, expiration control, and email notifications. Used Azure Blob Storage for cloud persistence.',
      color: 'from-purple-100 to-purple-200',
    },
    {
      title: 'Customer Feedback Analytics Tool',
      description:
        'Created a full-stack dashboard with .NET Core APIs, React.js frontend, and MongoDB. Features include sentiment tagging, search filters, and real-time chart rendering using Chart.js.',
      color: 'from-yellow-100 to-yellow-200',
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
        <div className="grid md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${project.color} p-6 rounded-xl shadow-xl ring-1 ring-gray-200 transition-transform transform hover:-translate-y-1 hover:-rotate-1 hover:ring-2 hover:ring-purple-400 hover:shadow-2xl duration-500 ease-in-out`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={`${index * 100}`}
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
