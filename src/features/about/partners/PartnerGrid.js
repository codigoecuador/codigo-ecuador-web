import React from "react";
import { Grid, Image } from "semantic-ui-react";

const PartnerGrid = ({ content, image, name }) => {
  return (
    <Grid.Row columns={2}>
      <br />

      <Grid.Column verticalAlign='center'>
        <Image className='partner-image' src={image} />
      </Grid.Column>

      <Grid.Column verticalAlign='center'>
        <div className='partner-headline'>{name}</div>
        <div className='partner-description'>
          {content.map(info => (
            <p>{info}</p>
          ))}
        </div>
      </Grid.Column>
    </Grid.Row>
  );
};

export default PartnerGrid;
