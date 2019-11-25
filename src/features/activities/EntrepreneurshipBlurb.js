import React from "react";
import { connect } from "react-redux";
import { entrepreneurshipBlurbText } from "../../common/activitiesText/entrepreneurshipText";

const EntrepreneurshipBlurb = () => {
    return (
        <div className="activities">
          <br/>
          <div className="sub-headline">
            {entrepreneurshipBlurbText[localStorage.getItem("language")].title}
          </div>

          <div className="activities-description">
            {entrepreneurshipBlurbText[localStorage.getItem("language")].text}
          </div>

          <div className="activities-button">
            {entrepreneurshipBlurbText[localStorage.getItem("language")].button}
          </div>

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(EntrepreneurshipBlurb);
