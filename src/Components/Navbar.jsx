import React from "react";
import { NavLink } from "react-router";
import menu from "../assets/portfolioAssets/menu_open.svg";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/about">About Me</NavLink>
      </li>

      <li>
        <NavLink to="/works">My Works</NavLink>
      </li>

      <li>
        <NavLink to="/add-project">Add Projects</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
      <div className="navbar-start">
        <a className="btn btn-ghost text-2xl font-extrabold text-white">
          Fahim
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 text-xl">{links}</ul>
      </div>

      <div className="navbar-end">
        <a className="btn btn-primary   mr-2  rounded-2xl text-gray-200   sm:inline-flex hover:shadow-lg transition-shadow ">
          Connect with Me
        </a>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <img src={menu} alt="Menu" className="w-6 h-6 " />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-200 rounded-box z-10 mt-3 w-52 p-2 text-xl shadow-lg"
          >
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
