import React, { Component } from "react"
import { Card, Image  } from "semantic-ui-react"
import './Research.css'

class ResearchCard extends Component {


	render() {
		let research = this.props.research


		return (
			<>
				<Card className="research-card">
					<Image src={research.image} className="research-image"/>

					<Card.Content className="card-content">
						<Card.Header>
							<div className="large research-headline">{research.title}</div>
							<br/>
						</Card.Header>

						<Card.Description>
							<div className="research-description">
								{research.description}<br/>
							</div>
						</Card.Description>
					</Card.Content>

					<Card.Content extra className="cardBottom right">
						<h3>{research.subtitle}</h3>
					</Card.Content>
				</Card>
				<br/>
				<br/>
			</>

		)
	}
}

export default ResearchCard
