import React from "react";
import { ourStoryText } from "../../../common/aboutText/ourStoryText";

const OurStory = () => {
  return (
    <div className="about-bubble">
      <div className="headline our-story-headline">
        <span className="gold">
          {ourStoryText[localStorage.getItem("language")].goldTitle}
        </span>

        <span className="navy">
          {ourStoryText[localStorage.getItem("language")].navyTitle}
        </span>
      </div>
      {ourStoryText[localStorage.getItem("language")].text}
      {ourStoryText[localStorage.getItem("language")].links}
      <br />
    </div>
  );
};

export default OurStory;
