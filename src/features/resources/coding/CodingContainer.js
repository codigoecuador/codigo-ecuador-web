import React, { useState } from "react";
import "./Coding.css";
import CodingLinks from "./CodingLinks";
import { connect } from "react-redux";
import CodingButtonGroup from "./CodingButtonGroup";
import CodingMenu from "./CodingMenu";

const CodingContainer = props => {
  const [showing, setShowing] = useState("");

  const handleClick = event => {
    // this.setState({ showing: event.target.value });
    setShowing(event.target.value);
  };

  const handleMobileClick = event => {
    // this.setState({ showing: event });
    setShowing(event);
  };

  let codingButtonGroup;
  if (props.size === "mobile") {
    codingButtonGroup = (
      <CodingMenu
        fluid
        handleMobileClick={handleMobileClick}
        showing={showing}
      />
    );
  } else {
    codingButtonGroup = (
      <CodingButtonGroup handleClick={handleClick} showing="showing" />
    );
  }
  return (
    <div className="main-container">
      <div className="headline banner-headline">
        <span className="gold">{showing || "Coding"} Resources</span>
      </div>

      {codingButtonGroup}

      <div className="showing">
        <CodingLinks type={showing} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { size: state.size.size };
};

export default connect(mapStateToProps)(CodingContainer);
