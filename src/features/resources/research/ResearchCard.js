import React, { Component } from "react"
import { Card  } from "semantic-ui-react"

class ResearchCard extends Component {
	render() {
		let research = this.props.research

		return (
			<>

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
