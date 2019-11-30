import React from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";
import { minorPartnersData } from "./MinorPartnersData";

const minorPartners = props => {
  let num = props.size === "mobile" ? 1 : 2;
  return (
    <>
      <div class="ui divider"></div>
      <br />
      <Card.Group itemsPerRow={num} className="center">
        {minorPartnersData.map(partner => (
          <Card>
            <div className="minor-partner-image-wrapper">
              <div className={partner.imageClassName}>
                <img src={partner.image} />
              </div>
            </div>

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
