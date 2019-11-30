import React from "react";
import "./Activities.css";
import EducationBlurb from "./EducationBlurb";
import InternshipBlurb from "./InternshipBlurb";
import MentorshipBlurb from "./MentorshipBlurb";
import "../Home.css";

const Activities = () => {
  return (
    <div className="blurb-group">
      <div className="blurb">
        <EducationBlurb />
      </div>
      <div className="blurb">
        <InternshipBlurb />
      </div>
      <div className="blurb">
        <MentorshipBlurb />
      </div>
    </div>
  );
};

export default Activities;
