import React, { useState } from "react";
import "./Coding.css";
import CodingLinks from "./CodingLinks";
import { connect } from "react-redux";
import CodingButtonGroup from "./CodingButtonGroup";
import CodingMenu from "./CodingMenu";
import { codingHeadlineText } from "../../../common/resourcesText/coding/codingHeadlineText";

const CodingContainer = props => {
  let lang = localStorage.getItem("language");
  const [showing, setShowing] = useState("");

  const handleClick = event => {
    setShowing(event.target.value);
  };

  const handleMobileClick = event => {
    setShowing(event);
  };

  let codingButtonGroup;
  if (window.innerWidth < 900) {
    codingButtonGroup = (
      <CodingMenu
        fluid
        handleMobileClick={handleMobileClick}
        showing={showing}
        lang={props.lang.language}
      />
    );
  } else {
    codingButtonGroup = (
      <CodingButtonGroup
        handleClick={handleClick}
        showing="showing"
        lang={props.lang.language}
      />
    );
  }
  return (
    <div className="main-container">
      <div className="headline banner-headline">
        <span className="gold">
          {codingHeadlineText[lang].codingResourcesFor} {showing || "Students"}{" "}
        </span>
      </div>

      {codingButtonGroup}

      <div className="showing">
        <CodingLinks type={showing} language={props.lang.language} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { size: state.size.size, lang: state.language };
};

export default connect(mapStateToProps)(CodingContainer);
