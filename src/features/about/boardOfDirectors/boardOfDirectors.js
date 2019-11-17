import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Card } from "semantic-ui-react"
import "./boardOfDirectors.css"

class BoardOfDirectors extends Component {
  render(){
    return (
      <Container>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="headline" style={{fontSize: '70px' }}><span className="gold">Board of</span><span className="navy"> Directors</span></div>
        	<Card.Group itemsPerRow={2} className="center">
            <Card className="board-card">
              <img style={{width: 420, height: 422, display: "block", margin: '0 auto'}} src="https://media.licdn.com/dms/image/C4D03AQEX65R-YqCvDw/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=ZLLmNnAa_u3iCWgjD-TNNuQX4K0uhNWZJoklxttN9c0" />
            </Card>

            <Card>
              <div class="content">
                <h1 className="board-header">Debra Ray</h1>
                <div class="meta">
                  <span className="board-meta">Founder and CEO</span>
                </div>
                <div class="description board-description">
                "I want to advance global economic development by sharing resources with women entering adulthood to help them become more independent."
                </div>
              </div>
            </Card>
            <Card>
              <div class="content">
                <h1 className="board-header">Tom Sullivan</h1>
                <div class="meta">
                  <span className="board-meta">President</span>
                </div>
                <div class="description board-description">
                "I want to help the youth of tomorrow turn their creative ideas into reality with computer programming."
                </div>
              </div>
            </Card>

            <Card>
              <img style={{width: 420, height: 422, display: "block", margin: '0 auto'}} src="https://static.wixstatic.com/media/47ab14_85e2c9c81a0a45b6b2b6ee0623d1f9f3~mv2.jpg/v1/fill/w_420,h_442,al_c,q_80,usm_0.66_1.00_0.01/Image%20from%20iOS_edited.webp" />
            </Card>
          </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = state => {  return {  size: state.size  } }

export default connect(mapStateToProps)(BoardOfDirectors)
