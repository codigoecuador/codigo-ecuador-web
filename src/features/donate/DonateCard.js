import React from 'react'
import { Card } from 'semantic-ui-react'



const DonateCard = ({topic, summary, image}) => {

    return (
      <div className='donateCardsGroup'>

          <Card>
            <div class="ui massive fade reveal image">
              <img className="visible content donateCard" src={image} alt="laptop, building or meeting space"/>
              <div className="hiddenContent"><h1 className="gold">{topic}</h1>
                <h3>{summary}</h3>
                <br/>
              </div>
            </div>
          </Card>


        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
}

export default DonateCard
