import React from "react";
import { connect } from "react-redux";
import { entrepreneurshipBlurbText } from "../../common/activitiesText/entrepreneurshipText";

const EntrepreneurshipBlurb = () => {
  return (
    <div className='bubble'>
      <br />
      <div className='sub-headline'>
        {entrepreneurshipBlurbText[localStorage.getItem("language")].title}
      </div>
      {entrepreneurshipBlurbText[localStorage.getItem("language")].text}

      {entrepreneurshipBlurbText[localStorage.getItem("language")].button}
    </div>
  );
};

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(EntrepreneurshipBlurb);
