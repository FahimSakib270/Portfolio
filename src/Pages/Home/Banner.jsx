import React from "react";
import bannerImg from "../../assets/portfolioAssets/profile_img.svg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="text-center max-w-6xl mx-auto p-6 space-y-4">
      <img
        src={bannerImg}
        alt="banner_image"
        className="w-70 h-70 mx-auto rounded-full object-cover border-2 border-gray-300 shadow-md"
      />

      <h1 className="text-3xl sm:text-5xl font-bold mt-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500  font-bold">
          I'm Fahim , Frontend Developer <br />
        </span>
        Living in Wuhan, China.
      </h1>

      <p className="mt-4 text-xl leading-relaxed">
        I'm actively learning and practicing modern frontend development with
        tools like React, JavaScript, and Tailwind CSS. I'm eager to join a team
        where I can contribute and continue growing as a developer.
      </p>
      <div className="space-x-3 ">
        <Link className="btn   rounded-full px-6 py-5 text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:bg-gradient-to-l hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 transition-all duration-300 hover:border-white hover:border-2">
          Connect with Me
        </Link>
        <Link className="btn  rounded-full  px-6 py-5 text-white border hover:border-2 border-white hover:border-purple-600">
          My resume
        </Link>
      </div>
    </div>
  );
};

export default Banner;
