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
              <br/>
              <div className="large">{research.title}</div>
              <br/>
              <div className="subtitle">{research.subtitle}</div>
            </Card.Header>

            <Card.Description className="researchDescription">
              {research.description}
              <br/>
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
