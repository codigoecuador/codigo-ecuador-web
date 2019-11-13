import React from 'react'
import { Container } from "semantic-ui-react"
import "./Mentorship.css"
import { mentorshipData } from './MentorshipData'

const Mentorship = () => {
    return (
      <Container className="mentorship">
        <div className="center headline">Career Mentorship</div>
        <br/>
        <br/>

        {mentorshipData.map(tip =>
          <div className="tip">
            <br/>

            <div className="tip-description">
              {tip.text}
            </div>
            <br/>
          </div>
          )}
          </Container>
    )
}

export default Mentorship
