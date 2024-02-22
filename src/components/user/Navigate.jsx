import React from "react";
import { NavLink } from "react-router-dom";

const Navigate = ({ navigate, icon, text }) => {
  return (
    <>
      <NavLink
        to={navigate}
        className="group  hover:bg-stone-700 hover:text-white flex items-center gap-2 px-3 py-2 rounded-lg "
      >
        {icon}
        <span className="group-hover:block hidden">{text}</span>
      </NavLink>
    </>
  );
};

export default Navigate;
