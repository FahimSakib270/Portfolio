import React from "react";
import AboutMe from "./Home/AboutMe";

const AboutDetailsMe = () => {
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
