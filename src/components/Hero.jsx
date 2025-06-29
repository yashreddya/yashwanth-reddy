import React, { useState, useEffect } from "react";
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

  const [radius, setRadius] = useState(140);

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 100 : 140);
    };
    handleResize(); // call initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-36 md:px-20 md:py-28 flex flex-col md:flex-row items-center justify-center min-h-[850px] overflow-x-hidden gap-20">

      {/* Content Column */}
      <div className="max-w-xl text-left z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Hi, I’m <span className="text-green-700">Yashwanth</span> <br />
          <span className="text-green-800">Reddy</span>
        </h1>

        <h2 className="text-base md:text-lg font-semibold text-indigo-700 mb-4">
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
            <FaPhoneAlt className="mr-2 text-emerald-600" />+1 (678) 208 9897
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

      {/* Spinner Column */}
      <div className="w-full flex flex-col items-center md:w-[480px] md:justify-end md:pr-40 relative mt-20 md:mt-0 z-10">
        <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] z-0">

          {/* Glowing Ring */}
          <div className="absolute w-full h-full rounded-full bg-orange-100 blur-2xl opacity-30"></div>

          {/* Center Icon */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-600 text-4xl z-10">
            <FaTools />
          </div>

          {/* Rotating Skills (visible always) */}
          <div className="absolute left-1/2 top-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow origin-center z-0">
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
                    whiteSpace: "nowrap",
                  }}
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Spinner Keyframes */}
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
          animation: spinEase 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
