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
          I’m a .NET Developer with 4+ years of experience building scalable web applications using C#, ASP.NET Core, and React. I specialize in developing RESTful APIs, integrating cloud-native solutions on Azure and AWS, and optimizing databases using SQL Server and MongoDB.
        </p>
        <p className="text-lg leading-relaxed" data-aos="fade-left">
          I’m passionate about creating efficient full-stack applications, driving DevOps automation with Docker and CI/CD pipelines, and delivering secure, high-performing software. I thrive in agile environments and enjoy collaborating with cross-functional teams to solve complex business challenges.
        </p>
      </div>
    </section>
  );
}
