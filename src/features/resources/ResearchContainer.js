import React, { Component } from 'react'
import { Container, Divider, Image } from 'semantic-ui-react'
import { researchLinks } from './ResearchLinks'




class ResearchContainer extends Component {


  render(){

    return (
      <div className="researchContainer">
        <Container>
              <br/>
              {researchLinks.map(research =>
              <>
                <Image src={research.image}/>
                <div className="large resourceItemTitle">{research.title}</div>
                <br/>
                <div className="resourceItemSubtitle">{research.subtitle}</div>

                <br/>
                <br/>

                <div className="right">
                  <button className="resourceItemButton"><a href={research.buttonLink}>Learn More</a></button>
                </div>
                <br/>
              </>
              )}
              <Divider />

            </Container>

          )}
        </div>


    )
  }
}


export default ResearchContainer
