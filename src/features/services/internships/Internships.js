import React from "react";
import { connect } from "react-redux";
import "./Internships.css";
import { internshipsText } from "../../../common/servicesText/internshipsText";

const Internships = props => {
  return (
    <div className="main-container">
      <div className="headline banner-headline">
        <span className="gold">
          {internshipsText[localStorage.getItem("language")].title}
        </span>
      </div>

      <div className="internships-container">
        <div className="internships-text navy">
          {internshipsText[localStorage.getItem("language")].text}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(Internships);
