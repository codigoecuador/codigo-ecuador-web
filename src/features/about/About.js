import React from "react"
import "./About.css"
import OurStory from "./OurStory"
import CeoLetter from "./ceoLetter"

const About = () => {
	return (
		<div className="about-container">
			<div className="our-story">
				<OurStory />
			</div>

			<div className="ceo-letter">
				<CeoLetter />
			</div>
		</div>
	)
}

export default About
