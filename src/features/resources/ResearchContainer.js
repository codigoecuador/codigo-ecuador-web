import React, { Component } from 'react'
import { Divider, Image } from 'semantic-ui-react'
import { researchLinks } from './ResearchLinks'




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
        {researchLinks.map(research =>
          <>
            <h1 className="center">{research.title}</h1>
            <h2 className="center">{research.subtitle}</h2>
            <a href={research.link}><Image src={research.image} className="researchImage"/></a>
            <div className="researchText">{research.description}</div>
            <Divider />
            <br/>
            <br/>
          </>
        )}

      </div>

    )
  }
}


export default ResearchContainer
