import React from 'react'
import {Image, Card, Reveal} from 'semantic-ui-react'



const DonateCard = ({topic, summary, image}) => {

    return (
      <div className='donateCardsGroup'>

          <Card>
            <div class="ui massive fade reveal image">
              <img class="visible content donateCard" src={image}/>
              <div class="hidden content"><h2>{topic}</h2> {summary}</div>
            </div>
          </Card>

        <br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    )
}

export default DonateCard
