import React from "react";

const ResumePage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
      <section className="text-center">
        <p className="text-4xl md:text-5xl  bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Frontend Developer | Web Enthusiast
        </p>

        <a
          href="/resume.pdf"
          download
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg hover:shadow-xl transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          Download Resume
        </a>
      </section>

      <div className="max-w-3xl mx-auto p-6 bg-white text-black">
        <h1 className="text-3xl font-bold">Fahim Montasir Sakib</h1>
        <p>📍 Wuhan, China | 📞 +18627922135</p>
        <p>
          📧{" "}
          <a href="mailto:sakibfahim270@gmail.com">sakibfahim270@gmail.com</a>
        </p>
        <p>
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/sakib-fahim-57b074225 "
            target="_blank"
          >
            LinkedIn Profile
          </a>
        </p>

        <h2 className="mt-6 text-xl font-semibold">🎯 Professional Summary</h2>
        <p>
          Frontend Developer with a passion for building responsive and
          user-friendly web applications using modern technologies like React,
          Tailwind CSS, and JavaScript. Currently pursuing a B.Sc. in Computer
          Science, I am eager to apply my knowledge and skills in real-world
          development environments and contribute to innovative tech projects.
        </p>

        <h2 className="mt-6 text-xl font-semibold">📚 Education</h2>
        <p>
          <strong>B.Sc. in Computer Science</strong>
          <br />
          HuBei University of Technology — Wuhan, China
          <br />
          Expected Graduation: 2025
        </p>
        <p>
          Relevant Coursework: Data Structures, Algorithms, Web Development,
          Database Management
        </p>

        <h2 className="mt-6 text-xl font-semibold">💻 Technical Skills</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Languages: HTML5, CSS3, JavaScript (ES6+)</li>
          <li>Frameworks & Libraries: React, Tailwind CSS</li>
          <li>
            Tools & Platforms: Git, GitHub, VS Code, Figma, Chrome DevTools
          </li>
          <li>Deployment: Vercel, Netlify</li>
          <li>Other: Responsive Design, RESTful APIs</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">🌐 Projects</h2>
        <ul className="space-y-2">
          <li>
            <strong>Personal Portfolio Website</strong>
            <br />
            Built with React and Tailwind CSS to showcase personal work.
            <br />
            Technologies: React, Tailwind CSS, Vercel
          </li>
          <li>
            <strong>E-commerce UI Clone</strong>
            <br />
            Fully responsive frontend clone using React and Tailwind.
            <br />
            Technologies: React, Tailwind CSS, Figma
          </li>
          <li>
            <strong>Weather App</strong>
            <br />
            Fetches live weather data using an API.
            <br />
            Technologies: HTML, CSS, JavaScript, OpenWeatherMap API
          </li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">🏅 Certifications</h2>
        <ul className="list-disc pl-5">
          <li>Responsive Web Design – FreeCodeCamp</li>
          <li>JavaScript Algorithms and Data Structures – FreeCodeCamp</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">🗣️ Languages</h2>
        <ul className="list-disc pl-5">
          <li>English – Intermediate</li>
          <li>Chinese – Basic</li>
          <li>Bangla – Native</li>
          <li>Hindi – Conversational</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">👥 Connect With Me</h2>
        <p>
          GitHub:{" "}
          <a href="https://github.com/sakibfahim270 " target="_blank">
            github.com/sakibfahim270
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/sakib-fahim-57b074225 "
            target="_blank"
          >
            linkedin.com/in/sakib-fahim-57b074225
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResumePage;
