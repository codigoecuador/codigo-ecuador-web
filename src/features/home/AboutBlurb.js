import React from "react";
import { aboutBlurbText } from "../../common/homeText/aboutBlurbText";

const AboutBlurb = () => {
  return (
    <div className="bubble">
      <br />
      <div className="home-headline">
        {aboutBlurbText[localStorage.getItem("language")].title}
      </div>
      <div className="banana">Banana</div>

      <p>{aboutBlurbText[localStorage.getItem("language")].text}</p>
    </div>
  );
};

export default AboutBlurb;
