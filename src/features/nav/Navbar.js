import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink exact activeClassName="active" to="/about">
        About
      </NavLink>
      <NavLink exact activeClassName="active" to="/about">
        Activities
      </NavLink>
      <NavLink exact activeClassName="active" to="/blog">
        Blog
      </NavLink>
      <NavLink exact activeClassName="active" to="/donate">
        Donate
      </NavLink>
    </div>
  );
};

export default Navbar;
