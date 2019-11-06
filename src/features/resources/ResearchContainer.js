import React, { Component } from 'react'
import { Container, Divider, Image } from 'semantic-ui-react'
import { researchLinks } from './ResearchLinks'




class ResearchContainer extends Component {

  render(){

    return (
      <>
        <div className="headline">
          <span className="gold">Research</span>
        </div>


        <Container className="researchContainer">
          <br/>
          {researchLinks.map(research =>
            <>
              <Image src={research.image} className="researchImage"/>
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
