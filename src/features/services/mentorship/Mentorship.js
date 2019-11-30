import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import "./Mentorship.css";
import { mentorshipData } from "./MentorshipData";
import likeABoss from "./likeABoss.jpg";
import { mentorshipText } from "../../../common/servicesText/mentorshipText";

class Mentorship extends Component {
  render() {
    return (
      <Container className="main-container">
        <div className="headline center">
          <span className="dancing gold">
            {mentorshipText[localStorage.getItem("language")].titleGold}
          </span>
          <span className="dancing navy">
            {mentorshipText[localStorage.getItem("language")].titleNavy}
          </span>
        </div>
        <br />
        <img
          className="boss-photo"
          src={likeABoss}
          alt="woman's hand's holding mug with the words 'like a boss' by Brooke Lark on unsplash.com"
        />

        <h2 className="center">
          {mentorshipText[localStorage.getItem("language")].subhead}
        </h2>
        <br />
        <div className="mentor-text">
          <p>{mentorshipText[localStorage.getItem("language")].intro}</p>
        </div>

        {/* we are mapping over mentorshipData below, instead of common/services/mentorshipText */}

        {mentorshipData.map(tip => (
          <div className="tip-info">
            <br />

            <div className="tip-description">
              <span>
                <h1>{tip.id}.</h1>
                <p>{tip.text}</p>
              </span>
            </div>
            <br />
          </div>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { language: state.language, size: state.size.size };
};

export default connect(mapStateToProps)(Mentorship);
