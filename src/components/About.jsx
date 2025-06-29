import React from 'react';
import { FaUser, FaCode } from 'react-icons/fa';

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-[80vh] px-6 md:px-20 py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800"
      data-aos="fade-up"
    >
      {/* Floating Decorative Code Icon */}
      <div className="absolute opacity-10 text-6xl top-[30%] right-10 text-blue-200 z-0">
        <FaCode />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Icon and Header */}
        <div className="flex-shrink-0 text-blue-600 text-5xl mt-2">
          <FaUser />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-extrabold mb-2 text-gray-900">About Me</h2>
          <p className="text-md text-gray-600 mb-6">
            Passionate about crafting robust backend systems and intuitive front-end interfaces.
          </p>

          <p className="text-lg leading-relaxed mb-5" data-aos="fade-right">
            I’m a <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Full Stack Java Developer
            </span>{' '}
            with 4+ years of experience building scalable, high-performance enterprise applications using Java,
            Spring Boot, and React. I specialize in delivering secure REST and GraphQL APIs, microservice design,
            and deploying cloud-native apps on AWS, Azure, and GCP.
          </p>

          <p className="text-lg leading-relaxed" data-aos="fade-left">
            My skills span backend systems, front-end frameworks like Angular and React, and DevOps automation using
            Docker, Kubernetes, Jenkins, and Ansible. I'm also experienced with Neo4j for graph-based modeling,
            performance tuning for databases, and writing production-grade code in Agile environments.
          </p>
        </div>
      </div>

      {/* Bottom Padding */}
      <div className="mt-10" />
    </section>
  );
}
