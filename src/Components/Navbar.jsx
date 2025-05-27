import React from "react";
import { Link, NavLink } from "react-router";
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
        <Link className="btn  rounded-full px-6 py-3 text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:bg-gradient-to-l hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 transition-all duration-300">
          Connect with Me
        </Link>

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
