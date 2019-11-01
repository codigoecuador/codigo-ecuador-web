import React from 'react'
import { Card, Container } from 'semantic-ui-react'
import {activities} from './ActivitiesData'
import ActivityCard from './ActivityCard'
import NavBar from '../nav/Navbar'

const Activities = () => {
    return (
        <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="big center">
            <br/>
            Our work makes a difference.
          </div>
          <br/>
          <br/>
          <Container>
              <Card.Group itemsPerRow={2}>
                  {activities.map(activity =>
                      <ActivityCard
                        key={activity.id} {...activity} padding="20px"/>
                      )}
              </Card.Group>
          </Container>
          <br/>
          <br/>
        </div>
    )
}

export default Activities
