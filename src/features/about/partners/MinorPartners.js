import React from "react";
import { Container, Card } from "semantic-ui-react";
import { minorPartnersData } from "./MinorPartnersData";
//notes from lizzie
// become a partner - on website it has a form, but I just included their email
// can play with amount of cards per row once we have total amount of donors
// need to do ismobile

const minorPartners = () => {
  return (
    <Container>
      <div class='ui divider'></div>
      <br />
      <Card.Group itemsPerRow={4} className='center'>
        {minorPartnersData.map(partner => (
          <Card>
            <a href={partner.link} target='_blank' class='ui medium image'>
              <img src={partner.image} alt='' />
            </a>

            <div className='content'>
              <div className='header'>{partner.name}</div>
            </div>
            <div className='description'>{partner.content}</div>
          </Card>
        ))}
      </Card.Group>
    </Container>
  );
};

export default minorPartners;
