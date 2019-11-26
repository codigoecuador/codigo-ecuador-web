import React, { Component } from "react";
import { Container, Icon } from "semantic-ui-react";
import "./boardOfDirectors.css";
import { connect } from "react-redux";
import { boardDataDesktop } from "./boardDataDesktop";
import { boardDataMobile } from "./boardDataMobile";

class BoardOfDirectors extends Component {
  render() {
    let boardData =
      this.props.size === "mobile" ? boardDataMobile : boardDataDesktop;

    return (
      <div>
        <Container className='main-container'>
          <div className='headline banner-headline'>
            <span className='gold'>Board of Directors</span>
          </div>
          {boardData}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { size: state.size };
};

export default connect(mapStateToProps)(BoardOfDirectors);
