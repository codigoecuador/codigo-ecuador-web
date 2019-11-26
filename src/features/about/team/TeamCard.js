import React from "react"
import { Card, Feed, Image, Icon } from "semantic-ui-react"

const TeamCard = ({
	name,
	title,
	linkedin,
	description,
	background,
	image
}) => {
	return (
		<Card href={linkedin} raised className="team-card">
			<Image src={image} alt="Profile Pic" />
			<Card.Content>
				<Card.Header>{name}</Card.Header>
				<Card.Description>{title}</Card.Description>
			</Card.Content>
			<Card.Content textAlign="left">
				<Feed className="team-description">
					<Feed.Event>{description}</Feed.Event>
					<br/>
					<Feed.Event>{background}</Feed.Event>
				</Feed>
			</Card.Content>
			<Card.Content extra>
			<div className="center">
			<Icon name="linkedin" size="big" className="blue linked-in"/>
				Find me on LinkedIn
			</div>
			</Card.Content>
		</Card>
	)
}

export default TeamCard
