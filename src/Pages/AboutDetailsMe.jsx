import React from "react";
import AboutMe from "./Home/AboutMe";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { SiExpress, SiNetlify, SiTailwindcss, SiVercel } from "react-icons/si";

const AboutDetailsMe = () => {
  const techs = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-400 text-4xl" />,
    },
    { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-400 text-4xl" />,
    },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: "Express", icon: <SiExpress className="text-gray-400 text-4xl" /> },
    {
      name: "MongoDB",
      icon: <SiExpress className="text-green-500 text-4xl" />,
    },
    { name: "Git", icon: <FaGitAlt className="text-orange-600 text-4xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-200 text-4xl" /> },
    { name: "Vercel", icon: <SiVercel className="text-black text-4xl" /> },
    { name: "Netlify", icon: <SiNetlify className="text-teal-500 text-4xl" /> },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-700 text-4xl" />,
    },
  ];
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        <section>
          <AboutMe />
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-110 transition-transform duration-600 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4  bg-gradient-to-r from-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
            Education
          </h2>
          <ul className="space-y-4">
            <li>
              <p className="font-medium">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-sm opacity-70">
                Hubei University of Technology • 2021–2025
              </p>
              <p className="mt-1 text-sm">
                Relevant coursework: Data Structures, Algorithms, Web
                Development.
              </p>
            </li>
            <li>
              <p className="font-medium">High School</p>
              <p className="text-sm opacity-70">
                Cambrian School and College • 2018–2020
              </p>
            </li>
          </ul>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4  bg-gradient-to-r from-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
            Languages
          </h2>
          <ul className="space-y-2">
            <li>English — Intermediate</li>
            <li>Bangla — Native</li>
            <li>Chinese — Basic</li>
            <li>Hindi — Conversational</li>
          </ul>
        </section>
        <section className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
            Technologies I Use
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
            {techs.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <span>{tech.icon}</span>
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-110 transition-transform duration-600 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4  bg-gradient-to-r from-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
            Background
          </h2>
          <p>
            I'm from Dhaka, Bangladesh. A vibrant city known for its rich
            culture and growing tech ecosystem.
          </p>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-110 transition-transform duration-600 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4  bg-gradient-to-r from-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
            Interests
          </h2>
          <ul className="flex flex-wrap gap-2">
            {[
              "Web Development",
              "Open Source",
              "UI/UX Design",
              "Tech Blogging",
              "Reading",
            ].map((item) => (
              <span key={item} className="badge badge-primary badge-outline">
                {item}
              </span>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutDetailsMe;
