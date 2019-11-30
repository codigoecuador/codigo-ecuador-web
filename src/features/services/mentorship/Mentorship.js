import React from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import "./Mentorship.css";
import { mentorshipText } from "../../../common/servicesText/mentorshipText";
import likeABoss from "./likeABoss.jpg";

const Mentorship = props => {
  let lang = localStorage.getItem("language");

  return (
    <Container className="main-container">
      <div className="headline center">
        <span className="dancing gold">{mentorshipText[lang].titleGold}</span>
        <span className="dancing navy">{mentorshipText[lang].titleNavy}</span>
      </div>
      <br />
      <img
        className="boss-photo"
        src={likeABoss}
        alt="woman's hand's holding mug with the words 'like a boss' by Brooke Lark on unsplash.com"
      />

      <h2 className="center">{mentorshipText[lang].subtitle}</h2>
      <br />
      <div className="mentor-text">
        <p>{mentorshipText[lang].intro}</p>
      </div>

      {mentorshipText[lang].text.map(tip => (
        <div className="tip-info">
          <br />

          <div className="tip-description">
            <span>
              <h1>{tip.id}</h1>
              <p>{tip.text}</p>
            </span>
          </div>
          <br />
        </div>
      ))}
    </Container>
  );
};

const mapStateToProps = state => {
  return { size: state.size, language: state.language };
};

export default connect(mapStateToProps)(Mentorship);
