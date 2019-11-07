import React from "react"
import "./About.css"
import LeafPic from "./LeafPic"
import OurStory from "./OurStory"
import CeoLetter from "./ceoLetter"

const About = () => {
	return (
		<>
			<LeafPic />
			<div className="our-story">
				<OurStory />
			</div>
			<div className="big ceo-letter">
				<CeoLetter />
			</div>
		</>
	)
}

export default About
