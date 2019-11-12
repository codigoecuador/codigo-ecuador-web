import React, { Component } from "react";
import "./Coding.css";
import { Button } from "semantic-ui-react";
import CodingLinks from "./CodingLinks";
import { connect } from "react-redux";

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
	  headlineContainer = "headline-container-mobile"
    } else {
	  showing = "showing-desktop";
	  headlineContainer = "headline-container-desktop"
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

        <div className="coding-button-group">
          <br />
          <br />
          <Button.Group vertical>
            <button
              onClick={this.handleClick}
              className="coding-button"
              value="Student"
            >
              For Students
            </button>
            <br />
            <br />
            <button
              onClick={this.handleClick}
              className="coding-button"
              value="Parent"
            >
              For Parents
            </button>
            <br />
            <br />
            <button
              onClick={this.handleClick}
              className="coding-button"
              value="Educator"
            >
              For Educators
            </button>
            <br />
            <br />
            <button
              onClick={this.handleClick}
              className="coding-button"
              value="Entrepreneur"
            >
              For Entrepreneurs
            </button>
            <br />
            <br />
          </Button.Group>
        </div>

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
