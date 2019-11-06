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
              <div className="medium">{research.title}</div>
              <h3>{research.subtitle}</h3>
            </Card.Header>

            <Card.Description className="description">
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
