import React from "react";
import { connect } from "react-redux";
import "./Internships.css";
import { internshipText } from "../../../common/servicesText/internshipText.js";

const Internships = props => {
  let lang = localStorage.getItem("language");

  return (
    <div className="main-container">
      <div className="headline banner-headline">
        <span className="gold">{internshipText[lang].title}</span>
      </div>

      <div className="internships-container">
        <div className="internships-text">{internshipText[lang].text}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(Internships);
