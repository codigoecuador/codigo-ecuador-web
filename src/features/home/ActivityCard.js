import React from 'react'
import { Card } from 'semantic-ui-react'


const ActivityCard = ({id, title, subtitle, description, buttonLink}) => {

    return (
        <Card
           header={title}
           meta={subtitle}
           description={description}
         />
    )
}

export default ActivityCard
