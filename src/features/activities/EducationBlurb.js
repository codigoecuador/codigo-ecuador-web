import React from "react";
import { connect } from "react-redux";
import { educationBlurbText } from "../../common/activitiesText/educationText";

const EducationBlurb = () => {
  return (
    <div className='bubble'>
      <br />
      <div className='sub-headline'>
        {educationBlurbText[localStorage.getItem("language")].title}
      </div>
      {educationBlurbText[localStorage.getItem("language")].text}

      {educationBlurbText[localStorage.getItem("language")].button}
    </div>
  );
};

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(EducationBlurb);
