import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from "semantic-ui-react"
import "./Mentorship.css"
import { mentorshipData } from './MentorshipData'
import { mentorshipIntro } from './MentorshipIntro'

class Mentorship extends Component {

  render(){
    let mentorContainer

      if(this.props.size === "mobile"){
        mentorContainer = "mentor-container-mobile"
      } else {
        mentorContainer = "mentor-container-desktop"
      }

      return (
        <Container className={mentorContainer}>
          <div className="center headline">Career Mentorship</div>
          <br/>
          <div className="mentor-text">
            <p>
            {mentorshipIntro.text}
            </p>
          </div>
          <br/>

          {mentorshipData.map(tip =>
            <div className="tip-info">
              <br/>

              <div className="tip-description">
                <span><h1>{tip.id}.</h1><p>{tip.text}</p></span>
              </div>
              <br/>
            </div>
            )}
            </Container>
      )

  }


}

const mapStateToProps = state => {  return {  size: state.size  } }

export default connect(mapStateToProps)(Mentorship)
