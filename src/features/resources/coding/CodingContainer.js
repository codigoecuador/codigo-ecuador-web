import React, { Component } from "react";
import "./Coding.css";
import CodingLinks from "./CodingLinks";
import { connect } from "react-redux";
import CodingButtonGroup from "./CodingButtonGroup";
import CodingMenu from "./CodingMenu";

class CodingContainer extends Component {
  state = {
    showing: ""
  };

	handleClick = event => {
		this.setState({ showing: event.target.value })
	}

  handleMobileClick = event => {
    this.setState({ showing: event });
  };

  render() {
    let codingButtonGroup;
    if (this.props.size === "mobile") {
      codingButtonGroup = (
        <CodingMenu fluid handleMobileClick={this.handleMobileClick} showing={this.state.showing} />
      );
    } else {
      codingButtonGroup = (
        <CodingButtonGroup handleClick={this.handleClick} showing="showing" />
      );
    }
    return (
      <div className="coding-container">

          <br />
          <br />
          <br />
          <div className="headline headline-container">
            <span className="gold">{this.state.showing || "Coding"} Resources</span>
          </div>

        {codingButtonGroup}

        <div className="showing">
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { size: state.size };
};

export default connect(mapStateToProps)(CodingContainer);
