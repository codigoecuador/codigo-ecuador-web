import React from "react";
import { mentorshipBlurbText } from "../../../common/activitiesText/mentorshipText";

const MentorshipBlurb = () => {
  return (
    <div className="activities">
      <br />
      <div className="sub-headline">
        {mentorshipBlurbText[localStorage.getItem("language")].title}
      </div>
      <div className="activities-subtitle">
        {mentorshipBlurbText[localStorage.getItem("language")].subtitle}
      </div>

      <div className="activities-description">
        {mentorshipBlurbText[localStorage.getItem("language")].text}
      </div>

      <div className="activities-button">
        {mentorshipBlurbText[localStorage.getItem("language")].button}
      </div>
    </div>
  );
};

export default MentorshipBlurb;
