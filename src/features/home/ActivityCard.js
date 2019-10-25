import React from 'react'
import { Card, Button, Image} from 'semantic-ui-react'



const ActivityCard = ({id, title, subtitle, description, buttonText, buttonLink,image}) => {

    return (
        <Card >
            <Image src={image}/>
            <Card.Content >
                <Card.Header>{title}</Card.Header>
                <h3><i>{subtitle}</i></h3>
                <Card.Description>{description}</Card.Description>


            </Card.Content>
            <Card.Content className='center' extra >
                <Button ><a href={buttonLink}>{buttonText}</a></Button>
            </Card.Content>
        </Card>
    )
}

export default ActivityCard
