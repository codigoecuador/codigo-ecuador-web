import React from "react";
import { connect } from "react-redux";
import "./Navbar.css";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { navbarText } from "../../../common/navbarText";

const Navbar = () => {
  let lang = localStorage.getItem("language");

  return (
    <Container className="dropdown-button-group">
      <Link exact className="dropdown" to="/">
        <button className="dropdown-button">{navbarText[lang].home}</button>
      </Link>

      <div className="dropdown">
        <button className="dropdown-button">{navbarText[lang].about}</button>
        <div className="dropdown-content">
          <a href="/about">{navbarText[lang].ourStory}</a>
          <a href="/about/partners">{navbarText[lang].partners}</a>
          <a href="/about/team">{navbarText[lang].team}</a>
          <a href="/about/board">{navbarText[lang].board}</a>
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

      <div className="dropdown">
        <button className="dropdown-button">Resources</button>
        <div className="dropdown-content">
          <a href="/resources/coding">Coding</a>
          <a href="/resources/research">Research</a>
        </div>
      </div>

      <Link exact className="dropdown" to="/blog">
        <button className="dropdown-button">Blog</button>
      </Link>

      <Link exact className="dropdown" to="/donate">
        <button className="dropdown-button">Donate</button>
      </Link>
    </Container>
  );
};

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(Navbar);
