import React from "react"
import "./Donate.css"
import { Container, Card } from "semantic-ui-react"
import { donateData } from "./DonateData"
import DonateCard from "./DonateCard"
import Contact from "../contact/Contact"

const Donate = () => {
	return (
		<>
			<Container className="donate center">
				<div className="headline donate-headline">
					<span className="gold">Donate</span>
				</div>

				<div className="subhead">
					You can promote technology careers for women in Ecuador
					<br /> by helping us with supplies, equipment, and space
					from which to work.
				</div>
				<br />
				<br />

				<Card.Group itemsPerRow={3} className="center">
					{donateData.map((donate) => (
						<DonateCard {...donate} padding="20px" />
					))}
				</Card.Group>

				<Contact className="contact" />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</Container>
		</>
	)
}

export default Donate
