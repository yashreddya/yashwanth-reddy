import React from 'react';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaTools,
  FaCogs,
  FaDatabase,
  FaCloud,
  FaCode,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiJenkins,
  SiKubernetes,
  SiGraphql,
  SiTypescript,
  SiAngular,
  SiRedux,
  SiPostman,
  SiTerraform,
  SiJson,
  SiJavascript
} from 'react-icons/si';

export default function Skills() {
  return (
    <section
      id="skills"
      data-aos="fade-up"
      data-aos-duration="1000"
      className="px-6 py-20 bg-gray-50 text-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mt-6 mb-4 text-blue-600 text-4xl" data-aos="zoom-in" data-aos-delay="200">
          <FaTools />
        </div>
        <h2 className="text-4xl font-bold mb-10" data-aos="zoom-in" data-aos-delay="300">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-lg text-center">

          <div data-aos="flip-left"><FaCode className="text-3xl mx-auto mb-2 text-purple-700" />C#</div>
          <div data-aos="flip-right"><FaCogs className="text-3xl mx-auto mb-2 text-blue-600" />.NET Core / MVC</div>
          <div data-aos="flip-left"><FaDatabase className="text-3xl mx-auto mb-2 text-indigo-700" />SQL Server</div>
          <div data-aos="flip-right"><SiMongodb className="text-3xl mx-auto mb-2 text-green-600" />MongoDB</div>

          <div data-aos="flip-left"><FaReact className="text-3xl mx-auto mb-2 text-blue-500" />React.js</div>
          <div data-aos="flip-right"><SiAngular className="text-3xl mx-auto mb-2 text-red-600" />Angular</div>
          <div data-aos="flip-left"><SiTypescript className="text-3xl mx-auto mb-2 text-blue-700" />TypeScript</div>
          <div data-aos="flip-right"><SiJavascript className="text-3xl mx-auto mb-2 text-yellow-500" />JavaScript</div>

          <div data-aos="flip-left"><FaHtml5 className="text-3xl mx-auto mb-2 text-orange-600" />HTML5</div>
          <div data-aos="flip-right"><FaCss3Alt className="text-3xl mx-auto mb-2 text-blue-600" />CSS3</div>
          <div data-aos="flip-left"><SiRedux className="text-3xl mx-auto mb-2 text-purple-600" />Redux</div>
          <div data-aos="flip-right"><SiJson className="text-3xl mx-auto mb-2 text-gray-700" />JSON / REST</div>

          <div data-aos="flip-left"><FaGitAlt className="text-3xl mx-auto mb-2 text-red-600" />Git / GitHub</div>
          <div data-aos="flip-right"><SiJenkins className="text-3xl mx-auto mb-2 text-pink-600" />Jenkins</div>
          <div data-aos="flip-left"><FaCloud className="text-3xl mx-auto mb-2 text-blue-500" />Azure DevOps</div>
          <div data-aos="flip-right"><SiTerraform className="text-3xl mx-auto mb-2 text-indigo-500" />Terraform</div>

          <div data-aos="flip-left"><FaDocker className="text-3xl mx-auto mb-2 text-blue-500" />Docker</div>
          <div data-aos="flip-right"><SiKubernetes className="text-3xl mx-auto mb-2 text-blue-400" />Kubernetes</div>
          <div data-aos="flip-left"><FaAws className="text-3xl mx-auto mb-2 text-yellow-500" />AWS</div>
          <div data-aos="flip-right"><FaCloud className="text-3xl mx-auto mb-2 text-blue-700" />Azure</div>

          <div data-aos="flip-left"><SiGraphql className="text-3xl mx-auto mb-2 text-pink-600" />GraphQL</div>
          <div data-aos="flip-right"><FaCode className="text-3xl mx-auto mb-2 text-gray-800" />Web API</div>
          <div data-aos="flip-left"><FaTools className="text-3xl mx-auto mb-2 text-indigo-600" />VS / VS Code</div>
          <div data-aos="flip-right"><SiPostman className="text-3xl mx-auto mb-2 text-orange-500" />Postman</div>

        </div>
      </div>
    </section>
  );
}
