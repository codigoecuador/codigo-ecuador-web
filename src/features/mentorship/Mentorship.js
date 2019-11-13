import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Image } from "semantic-ui-react"
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
        <img className="boss-photo" src="https://images.unsplash.com/photo-1484981138541-3d074aa97716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="woman's hand's holding mug with the words 'like a boss'"/>
          <div className="center headline">Career Mentorship</div>
          <br/>
          <h2>We provide women with the resources they need to succeed! </h2>
          <br/>
          <div className="mentor-text">
            <p>
            {mentorshipIntro.text}
            </p>
          </div>

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
