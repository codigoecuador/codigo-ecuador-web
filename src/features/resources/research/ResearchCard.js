import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'


class ResearchCard extends Component  {


  render(){

    let research = this.props.research


    return (
      <>
        <Card>
          <Image src={research.image} className="researchImage"/>

          <Card.Content>
            <Card.Header>
              <div className="large">{research.title}</div>
            </Card.Header>
            <Card.Meta>
              {research.subtitle}
            </Card.Meta>

            <Card.Description className="researchDescription">
              {research.description}
            </Card.Description>
          </Card.Content>

          <Card.Content extra className="cardBottom">
          </Card.Content>
        </Card>
      </>
    )



  }

}

export default ResearchCard;
