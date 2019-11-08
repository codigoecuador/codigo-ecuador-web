import React from 'react'
import { Card, Feed, Image } from 'semantic-ui-react'



const TeamCard = ({name, title, linkedin, description, background, image}) => {

    return (
      

          <Card 
            href={linkedin}
          raised fluid>
              <Image src='###' alt='Profile Pic'/>
              <Card.Content>
                <Card.Header>{name}
                </Card.Header>
                <Card.Description>
                {title}
                </Card.Description>
            </Card.Content>
            <Card.Content>
                <Feed>
                    <Feed.Event>{description}</Feed.Event>
                    <Feed.Event>{background}</Feed.Event>
                </Feed>
            </Card.Content>
            <Card.Content extra>Find me on LinkedIn</Card.Content>
          </Card>

      
    )
}

export default TeamCard
