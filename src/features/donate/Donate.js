import React from 'react'
import { Container, Card } from 'semantic-ui-react'
import {donateData} from './DonateData'
import DonateCard from './DonateCard'

const Donate = () => {
  var gold = {
	color: 'rgb(186, 156, 91)'
};
  var blue = {
	color: 'rgb(18, 43, 79)'
};
    return (
        <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Container>
            <h1 className='center'><span style={gold}>Código</span><span style={blue}> Ecuador</span></h1>
           <h3 className='center'>You can promote technology careers for women in Ecuador by
             helping us with supplies, equipment, and space from which to work.</h3>
           <br/>
           <Card.Group itemsPerRow={3}>
             {donateData.map(donate =>
                 <DonateCard
                   {...donate} padding="20px"/>
                 )}
             </Card.Group>

           subscribe form
           phone contact & email?
           501c3 org statement
           copyright
           </Container>
        </div>
    )
}

export default Donate
