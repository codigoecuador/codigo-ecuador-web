import React, { Component } from 'react'
import { Container, Divider, Image } from 'semantic-ui-react'
import { researchLinks } from './ResearchLinks'




class ResearchContainer extends Component {

  render(){

    return (
      <>
        <div className="researchHeadline">
          <span className="gold headline">Research</span>
        </div>


        <Container className="researchContainer">
          <br/>
          {researchLinks.map(research =>
            <>
              <a href={research.link}><Image src={research.image} className="researchImage"/></a>
              <div className="researchDescription">{research.description}</div>
              <Divider />
              <br/>
              <br/>
            </>
          )}

        </Container>




      </>
    )
  }
}


export default ResearchContainer
