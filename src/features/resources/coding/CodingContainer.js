import React, { Component } from "react";
import "./Coding.css";
import CodingLinks from "./CodingLinks";
import { connect } from "react-redux";
import CodingButtonGroup from "./CodingButtonGroup"

class CodingContainer extends Component {
  state = {
    showing: ""
  };

  handleClick = event => {
    this.setState({ showing: event.target.value });
  };

  render() {
    let showing;
    let headlineContainer;
    if (this.props.size === "mobile") {
      showing = "showing-mobile";
      headlineContainer = "headline-container-mobile";
    } else {
      showing = "showing-desktop";
      headlineContainer = "headline-container-desktop";
    }
    return (
      <>
        <div className={headlineContainer}>
          <br />
          <br />
          <br />
          <div className="headline">
            <span className="gold">{this.state.showing || "Coding"}</span>
            <span className="navy"> Resources</span>
          </div>
        </div>

		<CodingButtonGroup handleClick={this.handleClick}/>

        <div className={showing}>
          <CodingLinks type={this.state.showing} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { size: state.size };
};

export default connect(mapStateToProps)(CodingContainer);
