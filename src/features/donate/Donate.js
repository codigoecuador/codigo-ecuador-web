import React from 'react'
import { Container } from 'semantic-ui-react'

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
          <Container>
            <h1><span style={gold}>Codigo</span><span style={blue}> Ecuador</span></h1>
           <h3>You can promote technology careers for women in Ecuador by
             helping us with supplies, equipment, and space from which to work.</h3>
           </Container>
        </div>
    )
}

export default Donate
