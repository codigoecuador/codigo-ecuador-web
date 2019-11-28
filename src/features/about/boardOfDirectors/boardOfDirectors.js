import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import "./boardOfDirectors.css";
import { connect } from "react-redux";
import { boardDataDesktop } from "./boardDataDesktop";
import { boardDataMobile } from "./boardDataMobile";

class BoardOfDirectors extends Component {
  debugger;
  render() {
    let boardData =
      this.props.size === "mobile" ? boardDataMobile : boardDataDesktop;

    return (
      <div>
        <Container className="main-container">
          <div className="headline banner-headline">
            <span className="gold">Board of Directors</span>
          </div>

          {boardData}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(BoardOfDirectors);
