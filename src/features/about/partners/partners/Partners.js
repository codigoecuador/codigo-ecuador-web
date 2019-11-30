import React from "react";
import { Grid } from "semantic-ui-react";
import "../Partners.css";
import { partnersData } from "./PartnersData";
import PartnerGrid from "./PartnerGrid";

const Partners = () => {
  return (
    <>
      <br />
      <br />
      <div className="headline banner-headline">
        <span className="gold">Our Partners</span>
      </div>

      <div className="subhead partners-text">
        We are grateful to our partners who share expertise and resources to
        help us succeed.
      </div>

      <Grid divided="vertically" className="partners-grid">
        {partnersData.map(partner => (
          <PartnerGrid {...partner} key={partner.name} />
        ))}
      </Grid>
    </>
  );
};

export default Partners;
