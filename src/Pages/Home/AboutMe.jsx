import React from "react";
import aboutImg from "../../assets/portfolioAssets/about_profile.svg";

const AboutMe = () => {
  return (
    <div className="space-y-6 px-4 md:px-0">
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-5 md:mb-10 ">
        About me
      </h1>

      <div className="flex flex-col md:flex-row  items-center  gap-5 md:gap-10 lg:gap-20">
        <img
          src={aboutImg}
          alt="Fahim Sakib"
          className=" rounded-xl  object-cover"
        />

        <div className="md:max-w-2xl">
          <p className="text-base font-medium">
            I'm a passionate frontend developer currently learning and
            practicing modern web development with tools like HTML, CSS,
            JavaScript, React, and Tailwind CSS. As an aspiring developer, I'm
            excited to grow my skills and contribute to meaningful projects
            while learning from experienced professionals.
          </p>

          <div className="space-y-6 mt-8">
            <div className="hover:scale-110 transition-transform duration-300 ease-in-out">
              <div className="flex justify-between mb-1">
                <span className="text-base font-semibold">HTML & CSS</span>
                <span>90%</span>
              </div>
              <progress
                className="progress progress-primary w-full  bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
                value={90}
                max={100}
              ></progress>
            </div>

            <div className="hover:scale-110 transition-transform duration-300 ease-in-out">
              <div className="flex justify-between mb-1">
                <span className="text-base font-semibold">JavaScript</span>
                <span>85%</span>
              </div>
              <progress
                className="progress progress-secondary w-full  bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
                value={85}
                max={100}
              ></progress>
            </div>

            <div className="hover:scale-110 transition-transform duration-300 ease-in-out">
              <div className="flex justify-between mb-1">
                <span className="text-base font-semibold">React JS</span>
                <span>80%</span>
              </div>
              <progress
                className="progress progress-accent w-full  bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500  "
                value={80}
                max={100}
              ></progress>
            </div>

            <div className="hover:scale-110 transition-transform duration-300 ease-in-out">
              <div className="flex justify-between mb-1">
                <span className="text-base font-semibold">MongoDB</span>
                <span>50%</span>
              </div>
              <progress
                className="progress text-blue-300 bg-green-500   bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500  w-full"
                value={70}
                max={100}
              ></progress>
            </div>

            <div className="hover:scale-110 transition-transform duration-300 ease-in-out">
              <div className="flex justify-between mb-1 ">
                <span className="text-base font-semibold">Express JS</span>
                <span>55%</span>
              </div>
              <progress
                className="progress bg-vivid-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500  w-full "
                value={65}
                max={100}
              ></progress>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  justify-center items-center gap-8 mt-10">
        <div className="text-center md:text-left bg-gradient-to-r from-fuchsia-500 to-orange-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 ease-in-out ">
          <span className="text-5xl font-bold gradient-text">8+</span>
          <p className="text-sm opacity-70 bg-gradient-to-r from-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
            TECHNOLOGIES LEARNED
          </p>
        </div>

        <div className="border-l border-gray-600 h-16 mx-4 hidden md:block"></div>

        <div className="text-center md:text-left bg-gradient-to-r from-fuchsia-500 to-orange-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 ease-in-out">
          <span className="text-5xl font-bold gradient-text">10+</span>
          <p className="text-sm opacity-70 bg-gradient-to-r from-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
            PERSONAL PROJECTS
          </p>
        </div>

        <div className="border-l border-gray-600 h-16 mx-4 hidden md:block"></div>

        <div className="text-center md:text-left bg-gradient-to-r from-fuchsia-500 to-orange-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 ease-in-out">
          <span className="text-5xl font-bold gradient-text">500+</span>
          <p className="text-sm opacity-70 bg-gradient-to-r from-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
            HOURS OF CODING
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
