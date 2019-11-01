import React from 'react'
import { Card, Container } from 'semantic-ui-react'
import {activities} from './ActivitiesData'
import ActivityCard from './ActivityCard'

const Activities = () => {
    return (
        <div>
          <br/>
          <br/>
          <br/>
          <br/>
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
        </div>
    )
}

export default Activities
