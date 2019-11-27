import React from "react";
import "./Donate.css";
import { connect } from "react-redux";
import { Container, Card } from "semantic-ui-react";
import { donateText } from "../../common/donateText/donateText.js";
import DonateCard from "./DonateCard";
import Contact from "./contact/Contact";

const Donate = props => {
  let lang = localStorage.getItem("language");
  return (
    <>
      <Container className="main-container center">
        <div className="headline banner-headline">
          <span className="gold">{donateText[lang].title}</span>
        </div>
        {donateText[lang].text}
        <br />
        <br />
        <Card.Group itemsPerRow={3} className="center">
          {donateText[lang].cards.map(donate => (
            <DonateCard {...donate} padding="20px" />
          ))}
        </Card.Group>
        <Contact className="contact" />
      </Container>
    </>
  );
};

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(Donate);
