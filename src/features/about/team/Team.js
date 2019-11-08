import React, {Component} from 'react'
import { Container, Card, Image, Divider } from "semantic-ui-react"
import './Team.css'
// import Pic from '###'
import {teamData} from './TeamData'
import TeamCard from './TeamCard'

class Team extends Component {
    render(){
        // debugger
    return (
        
        <Container className="team center">
                <div className="headline">
					<span className="gold">Our Team</span>
				</div>
                {/* <Image src={Pic} fluid/> */}
                <div className="subhead">
                Código Ecuador is developing through an extensive network of social activists and computer programming advocates. We’re very proud of the diversity of our partners, and their abilities to contribute their own unique experience and skills to our success. Find out more about some of our team members below.
				</div>
                <br />
                <Divider/>
                <br/>
                <div className="headline">
					<span className="navy">Meet the Team</span>
				</div>
                <br />
                <Card.Group itemsPerRow={2} className="center">
                    {teamData.map(member => 
                    
                        <TeamCard {...member}  />
                    
                    )}
                </Card.Group>
            
        </Container>
        
    )
                    }
}

export default Team
