import React from 'react'
import { Card } from 'semantic-ui-react'



const TeamCard = ({name, title, description, background, image}) => {

    return (
      <div className='team-cards-group'>

          <Card>
              <Card.Content>
                <Card.Header>
                    <p>Profile Picture</p>
                    {/* {image} */}
                </Card.Header>
                <Card.Description>
                    <h3>{name}</h3>
                    <h6>{title}</h6>
                    <p>{description}</p>
                    <p>{background}</p>
                </Card.Description>
                </Card.Content>
          </Card>


        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
}

export default TeamCard
