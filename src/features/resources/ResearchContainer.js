import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import { researchLinks } from './ResearchLinks'
import ResearchCard from './ResearchCard'




class ResearchContainer extends Component {

  render(){

    return (

      <div className="researchContainer">
        <br/>

        <div className="researchBanner">
          <div className="center">
            <span className="gold headline">Research</span>
          </div>
          <br/>
          <div className="researchText">
            <h1 className="center">We model Código Ecuador on research and insights from reputable economic development experts.</h1>

            <p>Coding education is making a huge impact throughout the developing world. People are learning the technical skills necessary to build tomorrow's cutting-edge applications. From Colombia to Lebanon, nonprofit education is opening doors in high paying technology careers for thousands of women and individuals. The work our organizations do are sparking a new wave of research in how we can create a more equal world.</p>
          </div>
        </div>

        <br/>

        <br/>
        <Card.Group itemsPerRow={2}>
            {researchLinks.map(research =>
              <ResearchCard
                key={research.id} research={research} padding="20px"/>
              )}
          </Card.Group>

      </div>

    )
  }
}


export default ResearchContainer
