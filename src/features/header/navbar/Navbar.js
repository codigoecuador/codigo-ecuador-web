import React from "react";
import { connect } from "react-redux";
import "./Navbar.css";
import { navbarText } from "../../../common/navbarText";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
        <button className="dropdown-button">{navbarText[lang].services}</button>
        <div className="dropdown-content">
          <a href="/services/classes">{navbarText[lang].classes}</a>
          <a href="/services/internships">{navbarText[lang].internships}</a>
          <a href="/services/mentorship">{navbarText[lang].mentorship}</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropdown-button">
          {navbarText[lang].resources}
        </button>
        <div className="dropdown-content">
          <a href="/resources/coding">{navbarText[lang].coding}</a>
          <a href="/resources/research">{navbarText[lang].research}</a>
          <a href="https://flipboard.com/@joanindiana5duk/codigo-8ma7ouh6y">
            {navbarText[lang].news}
          </a>
        </div>
      </div>

      <Link exact className="dropdown" to="/blog">
        <button className="dropdown-button">{navbarText[lang].blog}</button>
      </Link>

      <Link exact className="dropdown" to="/donate">
        <button className="dropdown-button">{navbarText[lang].donate}</button>
      </Link>
    </Container>
  );
};

const mapStateToProps = state => {
  return { size: state.size, language: state.language };
};

export default connect(mapStateToProps)(Navbar);
