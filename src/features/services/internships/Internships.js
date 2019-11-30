import React from "react";
import { connect } from "react-redux";
import { Popup } from "semantic-ui-react";
import "./Internships.css";
import { internshipText } from "../../../common/servicesText/internshipText.js";

const Internships = props => {
  let lang = localStorage.getItem("language");

  return (
    <div className="main-container">
      <div className="headline banner-headline">
        <span className="gold">{internshipText[lang].title}</span>
      </div>

      <Popup
        content={internshipText[localStorage.getItem("language")].photoCredit}
        trigger={
          <div className="internships-container">
            <div className="internships-text">{internshipText[lang].text}</div>
          </div>
        }
        position="bottom right"
      />
    </div>
  );
};

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(Internships);
