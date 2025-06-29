import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaDownload,
  FaTools,
} from "react-icons/fa";

const Hero = () => {
  const skills = [
    "Java",
    "Spring Boot",
    "React",
    "MongoDB",
    "SQL",
    "Docker",
    "Azure",
    "AWS",
  ];

  const radius = 140;

  return (
    <section className="relative bg-gradient-to-r from-indigo-50 to-purple-50 p-10 md:p-20 flex flex-col md:flex-row items-center justify-center min-h-[90vh] overflow-hidden gap-10">
      
      {/* Spinner Column */}
      <div className="w-[480px] flex justify-end pr-12 md:pr-40 lg:pr-48 relative overflow-visible">
        <div className="relative w-[380px] h-[380px] z-0">
          {/* Glowing Ring */}
          <div className="absolute w-full h-full rounded-full bg-orange-100 blur-2xl opacity-30"></div>

          {/* Center Icon */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-600 text-4xl z-10">
            <FaTools />
          </div>

          {/* Rotating Skills */}
          <div className="absolute left-1/2 top-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow origin-center">
            {skills.map((skill, index) => {
              const angle = (index / skills.length) * 2 * Math.PI;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              const rotation = -angle * (180 / Math.PI);

              return (
                <div
                  key={skill}
                  className="absolute text-sm px-3 py-1 text-white rounded-full shadow-md hover:scale-110 transition-all"
                  style={{
                    backgroundColor: "#f97316",
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                  }}
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Column */}
      <div className="max-w-xl text-left z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Hi, I’m <span className="text-green-700">Yashwanth</span> <br />
          <span className="text-green-800">Reddy</span>
        </h1>

        <h2 className="text-lg font-semibold text-indigo-700 mb-4">
          Full Stack Java Developer • Microservices • Cloud
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6 font-medium">

          I’m a Full Stack Java Developer with 4+ years of experience building
          scalable enterprise-grade applications using Java, Spring Boot, and
          React. I focus on delivering secure REST APIs, scalable CI/CD
          pipelines, and cloud deployment on AWS and Azure.
        </p>

        <div className="text-gray-800 space-y-2 mb-6">
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-emerald-600" /> Atlanta, GA
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="mr-2 text-emerald-600" /> (470)-601-3859
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-emerald-600" />
            yashwantharravapula@gmail.com
          </div>
        </div>

        <a
          href="/YashwanthReddy_Resume.pdf"
          download
          className="inline-flex items-center text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all"
          style={{ backgroundColor: "#f97316" }}
        >
          Download Resume <FaDownload className="ml-2" />
        </a>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes spinEase {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spinEase 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
