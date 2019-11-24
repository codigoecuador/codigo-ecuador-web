import React from 'react'

import { Container } from "semantic-ui-react"
import "./Mentorship.css"
import { mentorshipData } from './MentorshipData'
import { mentorshipIntro } from './MentorshipIntro'
import likeABoss from './likeABoss.jpg'


const Mentorship = () => {
    return (
      <Container className="mentor-container">

        <div className="headline center">
          <span className="dancing gold">Career</span><span className="dancing navy"> Mentorship</span>
        </div>
        <br/>

        <img className="boss-photo"
          src={likeABoss}
          alt="woman's hand's holding mug with the words 'like a boss' by Brooke Lark on unsplash.com"/>

        <h2 className="center">We provide women with the resources they need to succeed! </h2>
        <br/>

        <div className="mentor-text">
          <p>{mentorshipIntro.text}</p>
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

export default Mentorship
