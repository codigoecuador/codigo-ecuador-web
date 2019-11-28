import React, { useState } from "react"
import "./Services.css"
import { Container } from "semantic-ui-react"
import Classes from "./classes/Classes"
import Mentorship from "./mentorship/Mentorship"

const Services = () => {
	const [showing, setShowing] = useState("classes")

	const handleClick = (event) => {
		setShowing(event.target.value)
	}

	const renderShowing = () => {
		if (showing === "classes") {
			return <Classes />
		} else {
			return <Mentorship />
		}
	}

	return (
		<Container className="services-container">
			<div className="services-button-group">
				<button
					className="services-button classes-button"
					onClick={handleClick}
					value="classes"
				>
					<h1>Classes</h1>
				</button>

				<button
					className="services-button mentorship-button"
					onClick={handleClick}
					value="mentorship"
				>
					<h1>Mentorship</h1>
				</button>
			</div>

			<div className="services-showing">{renderShowing()}</div>
		</Container>
	)
}

export default Services
