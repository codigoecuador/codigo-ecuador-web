import React from "react"
import { Grid, Container } from "semantic-ui-react"
import "./Partners.css"
import { partnersData } from "./PartnersData"
import PartnerGrid from "./PartnerGrid"

const Partners = () => {
	return (
		<Container className="partners">
			<br />
			<br />

			<div className="headline">
				<span className="gold">Our</span>
				<span className="navy"> Partners</span>
			</div>

			<div className="subhead">
				We are grateful to our partners who share expertise and
				resources to help us succeed.
			</div>

			<br />
			<br />
			<br />

			<Grid divided="vertically" className="partners-grid">
				<br />
				<br />
				<br />
				<br />
				{partnersData.map((partner) => (
					<PartnerGrid {...partner} key={partner.name} />
				))}
			</Grid>
		</Container>
	)
}

export default Partners
