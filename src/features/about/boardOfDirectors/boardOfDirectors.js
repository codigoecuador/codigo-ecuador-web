import React from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import "./boardOfDirectors.css";
import BoardDataDesktop from "./boardDataDesktop";
import BoardDataMobile from "./boardDataMobile";
import { boardText } from "../../../common/aboutText/boardText";

const BoardOfDirectors = props => {
  let boardData =
    props.size === "mobile" ? <BoardDataMobile /> : <BoardDataDesktop />;

  return (
    <div>
      <Container className="main-container">
        <div className="headline banner-headline">
          <span className="gold">
            {boardText[localStorage.getItem("language")].title}
          </span>
        </div>

        {boardData}
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  return { language: state.language, size: state.size.size };
};

export default connect(mapStateToProps)(BoardOfDirectors);
