import React from "react"
import { Grid, Header, Image } from "semantic-ui-react"

const PartnerGrid = ({ content, image, name }) => {
	return (
		<Grid.Row columns={2}>
			<Grid.Column verticalAlign="center">
				<Image src={image} />
			</Grid.Column>
			<Grid.Column verticalAlign="center">
				<div>
					<Header as="h1" textAlign="center">
						<Header.Content className="navy-font">{name}</Header.Content>
					</Header>
					{content.map(info => (
						<p>{info}</p>
					))}
				</div>
			</Grid.Column>
		</Grid.Row>
	)
}

export default PartnerGrid
