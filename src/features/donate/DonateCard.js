import React from 'react'
import { Card} from 'semantic-ui-react'



const DonateCard = ({topic, summary, image}) => {

    return (
        <Card >
          {topic}
          {summary}
        </Card>
    )
}

export default DonateCard
