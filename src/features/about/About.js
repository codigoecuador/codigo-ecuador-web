import React, { Component } from "react"
import { connect } from 'react-redux'
import "./About.css"
import LeafPic from "./LeafPic"
import OurStory from "./OurStory"
import CeoLetter from "./ceoLetter"

class About extends Component {
	render(){
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

}

const mapStateToProps = state => {  return {  size: state.size  } }

export default connect(mapStateToProps)(About)
