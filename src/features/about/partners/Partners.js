import React from "react"
import { Grid, Header, Button, Form } from "semantic-ui-react"
import { data } from "./PartnersData"
import PartnerGrid from "./PartnerGrid"

const Partners = () => {
	console.log(data)
	return (
		<div>
			<span>
				<Header as="h1" textAlign="center">
					<strong
						className="gold-font"
						style={{
							padding: ".25em",
							marginHeight: "1em"
						}}
					>
						Our
					</strong>
					<strong className="navy-font">Partners</strong>
				</Header>
			</span>
			<span style={{ padding: ".25em" }}>
				<Header as="h4" textAlign="center">
					We are grateful to our partners who share expertise and resources
					to help us succeed.
				</Header>
			</span>
			<Grid divided="vertically" style={{ margin: "2em" }}>
				{data.map(partner => (
					<PartnerGrid {...partner} key={partner.name} />
				))}
			</Grid>
			<div className="subscribe-form half-width">
				<Header as="h4" textAlign="center">
					Subscribe Form
				</Header>
				<Form>
					<Form.Field>
						<input type="email" placeholder="Email Address" />
					</Form.Field>
					<Button type="submit">Submit</Button>
				</Form>
			</div>
			<span>+1 571-216-5441</span>
		</div>
	)
}

export default Partners
