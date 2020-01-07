import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import "../Partners.css";
import { partnersText } from "./../../../../common/aboutText/partnersText";
import PartnerGrid from "./PartnerGrid";

const Partners = () => {
  let lang = localStorage.getItem("language");
  return (
    <>
      <br />
      <br />
      <div className="headline banner-headline">
        <span className="gold">{partnersText[lang].title}</span>
      </div>

      <div className="subhead partners-text">{partnersText[lang].subtitle}</div>

      <Grid divided="vertically" className="partners-grid">
        {partnersText[lang].partners.map(partner => (
          <PartnerGrid {...partner} key={partner.name} />
        ))}
      </Grid>
    </>
  );
};

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(Partners);
