import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="active" to="/about">
        About
      </NavLink>
      <NavLink exact activeClassName="active" to="/blogs">
        Blogs
      </NavLink>
      <NavLink exact activeClassName="active" to="/news">
        News
      </NavLink>
      <NavLink exact activeClassName="active" to="/partners">
        Partners
      </NavLink>
      <NavLink exact activeClassName="active" to="/team">
        Meet The Team
      </NavLink>
      <NavLink exact activeClassName="active" to="/contact">
        Contact Us!
      </NavLink>
    </div>
  );
};

export default Navbar;
