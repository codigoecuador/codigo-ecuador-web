import React from 'react'
import {Image, Card, Reveal} from 'semantic-ui-react'



const DonateCard = ({topic, summary, image}) => {

    return (
      <div className='donate-cards'>
        <div class="ui grid">
          <div class="three wide column"></div>
          <div class="three wide column"></div>
          <div class="three wide column"></div>
          <div class="ui medium fade reveal image">
            <img class="visible content" src={image}/>
            <div class="hidden content"><h2>{topic}</h2> {summary}</div>
          </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    )
}

export default DonateCard
