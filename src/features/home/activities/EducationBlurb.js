import React from "react";
import { connect } from "react-redux";
import { educationBlurbText } from "../../../common/activitiesText/educationText";

const EducationBlurb = () => {
  return (
    <div className="activities">
      <br />
      <div className="sub-headline">
        {educationBlurbText[localStorage.getItem("language")].title}
      </div>
      <div className="activities-subtitle">
        {educationBlurbText[localStorage.getItem("language")].subtitle}
      </div>

      <div className="activities-description">
        {educationBlurbText[localStorage.getItem("language")].text}
      </div>

      <div className="activities-button">
        {educationBlurbText[localStorage.getItem("language")].button}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(EducationBlurb);
