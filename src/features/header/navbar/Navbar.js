import React from "react";
import "./Navbar.css";
// Capitalized B in above link to make it work
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container className="dropdown-button-group">
      <Link exact className="dropdown" to="/">
        <button className="dropdown-button">Home</button>
      </Link>

      <div className="dropdown">
        <button className="dropdown-button">About</button>
        <div className="dropdown-content">
          <a href="/about">Our Story</a>
          <a href="/about/partners">Partners</a>
          <a href="/about/team">Team</a>
          <a href="/about/board">Board</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropdown-button">Services</button>
        <div className="dropdown-content">
          <a href="/services/classes">Classes</a>
          <a href="/services/mentorship">Mentorship</a>
          <a href="/services/internships">Internships</a>
        </div>
      </div>

      <Link exact className="dropdown" to="/resources">
        <button className="dropdown-button">Resources</button>
      </Link>

      <Link exact className="dropdown" to="/blog">
        <button className="dropdown-button">Blog</button>
      </Link>

      <Link exact className="dropdown" to="/donate">
        <button className="dropdown-button">Donate</button>
      </Link>
    </Container>
  );
};

export default Navbar;
