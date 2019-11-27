import React from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";
import { minorPartnersData } from "./MinorPartnersData";
//notes from lizzie
// become a partner - on website it has a form, but I just included their email
// can play with amount of cards per row once we have total amount of donors
// need to do ismobile

const minorPartners = props => {
  let num = props.size === "mobile" ? 1 : 2;
  return (
    <>
      <div class="ui divider"></div>
      <br />
      <Card.Group itemsPerRow={num} className="center">
        {minorPartnersData.map(partner => (
          <Card>
            <a href={partner.link} class="ui medium image">
              <img
                className="minor-partner-image"
                src={partner.image}
                alt="partner logo"
                size="cover"
              />
            </a>

            <div className="content">
              <div className="subhead">{partner.name}</div>
            </div>
            <div className="minor-partner-description">{partner.content}</div>
          </Card>
        ))}
      </Card.Group>
    </>
  );
};
const mapStateToProps = state => {
  return { size: state.size.size };
};

export default connect(mapStateToProps)(minorPartners);
