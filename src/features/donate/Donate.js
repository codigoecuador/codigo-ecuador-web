import React from 'react'
import { Container, Card } from 'semantic-ui-react'
import {donateData} from './DonateData'
import DonateCard from './DonateCard'
import Contact from '../contact/Contact'

const Donate = () => {

    return (
          <Container className="donate center">
           <h1 className='blog-account big center gold'>Donate</h1>
           <h2 >You can promote technology careers for women in Ecuador
           <br/>
           by helping us with supplies, equipment, and space from which to work.</h2>
           <br/>
           <br/>

           <Card.Group itemsPerRow={3} className="center">
             {donateData.map(donate =>
                 <DonateCard
                   {...donate} padding="20px"/>
                 )}
             </Card.Group>
             <Contact className="contact"/>
          <br/>
           </Container>


    )
}

export default Donate
