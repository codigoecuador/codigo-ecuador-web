import React from "react"
import { Container, Card, Link } from "semantic-ui-react"
import { minorPartnersData } from "./MinorPartnersData"
//notes from lizzie
// become a partner - on website it has a form, but I just included their email
// can play with amount of cards per row once we have total amount of donors

const minorPartners = () => {
	return (
		<Container>
			<div class="ui divider"></div><br/>
				<Card.Group itemsPerRow={4} className="center">
					{minorPartnersData.map(partner =>
						<Card>
							<div className="image">
								<img src={partner.image} alt={`${partner.image}`} />
							</div>
							<div className="content">
								<div className="header"><a style = {{ fontSize: 22, color: '#0000EE' }} href={partner.link} target="_blank" >{partner.name}</a></div>
							</div>
							<div className="description">
								{partner.content}
							</div>
						</Card>
					)}
				</Card.Group>
		</Container>
	)
}

export default minorPartners
