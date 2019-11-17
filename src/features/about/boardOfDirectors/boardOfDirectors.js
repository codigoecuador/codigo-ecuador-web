import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Card } from "semantic-ui-react"
import "./boardOfDirectors.css"

class BoardOfDirectors extends Component {
  render(){
    return (
      <Container>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <div className="column">
            <h1 className="board-header">Debra Ray</h1>
             <div className="board-meta">Founder and CEO</div>
               <div class="description board-description">
                  "I want to advance global economic development by sharing resources with women entering adulthood to help them become more independent."
                  </div>
          </div>

          <div className="column">B</div>

          <div className="column">C</div>

          <div className="column">
            <h1 className="board-header">Tom Sullivan</h1>
            <div className="board-meta">President</div>
              <div class="description board-description">
              "I want to help the youth of tomorrow turn their creative ideas into reality with computer programming."
              </div>
          </div>
      </Container>
    )
  }
}

const mapStateToProps = state => {  return {  size: state.size  } }

export default connect(mapStateToProps)(BoardOfDirectors)
