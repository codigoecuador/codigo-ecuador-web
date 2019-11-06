import React, { Component } from "react"
import { Card, Image } from "semantic-ui-react"

class ResearchCard extends Component {
	render() {
		let research = this.props.research

		return (
			<>
				{/* <Card>
					<Image src={research.image} className="researchImage" />

					<Card.Content>
						<Card.Header>
							<div className="large">{research.title}</div>
						</Card.Header>
						<Card.Meta>{research.subtitle}</Card.Meta>

						<Card.Description>{research.description}</Card.Description>
					</Card.Content>

					<Card.Content extra className="cardBottom"></Card.Content>
        </Card> */}

				<Card
					image={research.image}
					header={research.title}
					meta={research.subtitle}
					description={research.description}
				></Card>
			</>
		)
	}
}

export default ResearchCard
