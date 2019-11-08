import React, {Component} from 'react'
import { Container, Card, Divider, Grid } from "semantic-ui-react"
import './Team.css'
import {teamData} from './TeamData'
import TeamCard from './TeamCard'

class Team extends Component {
    render(){
        // debugger
    return (
        
        <Container className="team center" justified>
                    {/* <br /> */}
                <div className="headline">
					<span className="gold">Our Team</span>
				</div>
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
                <div class="ui grid" columns={3} fluid>
                {/* <Grid class="ui grid" padded columns={3} fluid> */}
                    <div className='ui fluid cards' justified fluid columns={3}>
                    <Card.Group centered fluid justified>
                        {teamData.map(member => 
                            <TeamCard {...member} />
                        )}
                    </Card.Group>
                    </div>
                {/* </Grid> */}
                </div>
            
        </Container>
        
    )
                    }
}

export default Team
