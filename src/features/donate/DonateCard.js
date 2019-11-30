import React from "react";
import { Card } from "semantic-ui-react";

const DonateCard = ({ topic, summary, image }) => {
  return (
    <div className="donate-cards-group">
      <Card className="donate-card">
        <div className="ui massive fade reveal image">
          <img
            className="visible content donate-card"
            src={image}
            alt="laptop, building or meeting space"
          />
          <div className="hidden-content">
            <h1 className="gold">{topic}</h1>
            <h3>{summary}</h3>
            <br />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DonateCard;
