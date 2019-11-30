import React from "react";
import "./Donate.css";
import { Container, Card } from "semantic-ui-react";
import { donateData } from "./DonateData";
import DonateCard from "./DonateCard";
import Contact from "./contact/Contact";

const Donate = () => {
  return (
    <>
      <Container className="main-container center">
        <div className="headline banner-headline">
          <span className="gold">Donate</span>
        </div>

        <div className="subhead">
          You can promote technology careers for women in Ecuador
          <br /> by helping us with supplies, equipment, and space from which to
          work.
        </div>
        <br />
        <br />

        <Card.Group itemsPerRow={3} className="center">
          {donateData.map(donate => (
            <DonateCard {...donate} padding="20px" />
          ))}
        </Card.Group>

        <a href="https://charity.gofundme.com/o/en/campaign/promote-women-in-tech-careers-in-ecuador/codigoecuador">
          <h1>See our GoFundMe page</h1>
        </a>

        <Contact className="contact" />
      </Container>
    </>
  );
};

export default Donate;
