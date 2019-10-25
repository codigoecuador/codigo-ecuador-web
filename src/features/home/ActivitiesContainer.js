import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
import ActivityData from './ActivityData'

class ActivitiesContainer extends Component {
  render(){
    return (
        <div>

              <Card.Group itemsPerRow={2}>
                  {projects.map(project =>
                      <ActivityCard
                        key={project.id} project={project} padding="20px"/>
                      )}
              </Card.Group>

        </div>
    )
  }
}

export default ActivitiesContainer
