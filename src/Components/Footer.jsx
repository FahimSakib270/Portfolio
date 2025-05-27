import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-100 text-base-content p-10 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        <div>
          <h3 className="text-xl font-bold mb-2">Fahim</h3>
          <p className="text-sm opacity-70">
            Web Developer | Designer | Creator
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="/" className="link link-hover">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="link link-hover">
                About Me
              </a>
            </li>
            <li>
              <a href="/works" className="link link-hover">
                My Works
              </a>
            </li>
            <li>
              <a href="/add-project" className="link link-hover">
                Add Project
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Connect With Me</h3>
          <ul className="space-y-1">
            <li>
              <a
                href="mailto:your.email@example.com"
                className="link link-hover"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yourusername "
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourprofile "
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm opacity-60">
        &copy; {new Date().getFullYear()} Fahim. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
