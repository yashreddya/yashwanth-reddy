import React from 'react';
import {
  FaJava, FaReact, FaAngular, FaHtml5, FaCss3Alt, FaDatabase,
  FaAws, FaBug, FaGitAlt, FaCloud, FaTools, FaCode, FaLinux
} from 'react-icons/fa';
import {
  SiSpringboot, SiJenkins, SiDocker, SiKubernetes, SiMongodb,
  SiPostgresql, SiMysql, SiTypescript, SiJson, SiRedux,
  SiSelenium, SiGraphql, SiBitbucket
} from 'react-icons/si';

export default function Skills() {
  const categories = [
    {
      title: 'Frontend',
      color: 'text-pink-600',
      skills: [
        { name: 'React.js', icon: <FaReact className="text-blue-500" /> },
        { name: 'Angular', icon: <FaAngular className="text-red-600" /> },
        { name: 'HTML5 / CSS3', icon: <FaHtml5 className="text-orange-600" /> },
        { name: 'TypeScript / JS', icon: <SiTypescript className="text-blue-700" /> },
        { name: 'Redux / JSON', icon: <SiRedux className="text-purple-600" /> },
      ],
    },
    {
      title: 'Backend',
      color: 'text-blue-600',
      skills: [
        { name: 'Java / Core Java', icon: <FaJava className="text-red-700" /> },
        { name: 'Spring Boot / JPA', icon: <SiSpringboot className="text-green-600" /> },
        { name: 'REST APIs / GraphQL', icon: <SiGraphql className="text-pink-600" /> },
        { name: 'Multithreading / JDBC', icon: <FaCode className="text-gray-700" /> },
      ],
    },
    {
      title: 'Database',
      color: 'text-green-600',
      skills: [
        { name: 'PostgreSQL / MySQL', icon: <SiPostgresql className="text-blue-600" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
        { name: 'Oracle / PL-SQL', icon: <FaDatabase className="text-indigo-700" /> },
      ],
    },
    {
      title: 'DevOps & Cloud',
      color: 'text-yellow-600',
      skills: [
        { name: 'Docker / Kubernetes', icon: <SiDocker className="text-blue-600" /> },
        { name: 'Jenkins / CI-CD', icon: <SiJenkins className="text-pink-600" /> },
        { name: 'AWS / Azure / GCP', icon: <FaAws className="text-yellow-500" /> },
        { name: 'Bitbucket / Git', icon: <SiBitbucket className="text-blue-700" /> },
      ],
    },
    {
      title: 'Testing & Tools',
      color: 'text-purple-600',
      skills: [
        { name: 'JUnit / Mockito / TestNG', icon: <FaBug className="text-green-600" /> },
        { name: 'Selenium / JMeter', icon: <SiSelenium className="text-indigo-700" /> },
        { name: 'Linux / Bash', icon: <FaLinux className="text-black" /> },
        { name: 'IntelliJ / VS Code', icon: <FaTools className="text-gray-700" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 text-gray-800" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-700">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, idx) => (
            <div
              key={cat.title}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <h3 className={`text-xl font-bold mb-4 ${cat.color}`}>{cat.title}</h3>
              <ul className="space-y-3">
                {cat.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition">
                    <span className="text-2xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
