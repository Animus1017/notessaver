import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" py-2 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <div className="max-w-5xl mx-auto text-white text-lg font-bold flex justify-between">
        <NavLink
          to="/"
          className="hover:text-blue-500 duration-300 transition-all"
        >
          Home
        </NavLink>
        <NavLink
          to="/pastes"
          className="hover:text-blue-500 duration-300 transition-all"
        >
          Pastes
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
