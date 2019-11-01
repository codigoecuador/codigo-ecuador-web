import React from 'react'
import {Image, Card} from 'semantic-ui-react'



const DonateCard = ({topic, summary, image}) => {

    return (
        <Card >
          <Image src={image}/>
          <Card.Content >
              <Card.Header>{topic}</Card.Header>
              <Card.Description>{summary}</Card.Description>
          </Card.Content>
        </Card>
    )
}

export default DonateCard
