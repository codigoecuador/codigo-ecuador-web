import React from "react"
import { Container, Card, Divider } from "semantic-ui-react"
import "./Team.css"
import { teamData } from "./TeamData"
import TeamCard from "./TeamCard"

const Team = () => {
	return (
		<Container className="main-container">
			<div className="headline banner-headline center">
				<span className="gold">Our Team</span>
			</div>

			<div className="subhead">
				Código Ecuador is developing through an extensive network of
				social activists and computer programming advocates. We’re very
				proud of the diversity of our partners, and their abilities to
				contribute their own unique experience and skills to our
				success. Find out more about some of our team members below.
			</div>

			<Divider />
			<br />
			<br />

			<Card.Group centered justified>
				{teamData.map((member) => (
					<TeamCard {...member} />
				))}
			</Card.Group>
		</Container>
	)
}

export default Team
