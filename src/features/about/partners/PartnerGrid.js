import React from "react"
import { Grid, Image } from "semantic-ui-react"

const PartnerGrid = ({ content, image, name }) => {
	return (
		<Grid.Row columns={2}>
			<br/>

			<Grid.Column verticalAlign="center">
				<Image className="partnerImage" src={image} />
			</Grid.Column>

			<Grid.Column verticalAlign="center">
				<div className="partnerHeadline">
					{ name }
				</div>
				<div className="partnerDescription">
					{content.map(info => (
						<p>{info}</p>
					))}
				</div>
			</Grid.Column>

		</Grid.Row>
	)
}

export default PartnerGrid
