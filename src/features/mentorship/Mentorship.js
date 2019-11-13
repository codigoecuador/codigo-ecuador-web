import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Image } from "semantic-ui-react"
import "./Mentorship.css"
import { mentorshipData } from './MentorshipData'
import { mentorshipIntro } from './MentorshipIntro'
import likeABoss from './likeABoss.jpg'


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
        <img className="boss-photo" src={likeABoss} alt="woman's hand's holding mug with the words 'like a boss' by Brooke Lark on unsplash.com"/>
        <div className="headline">
          <span className="gold">Career</span><span className="navy"> Mentorship</span>
        </div>
          <br/>
          <h2 className="center">We provide women with the resources they need to succeed! </h2>
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
