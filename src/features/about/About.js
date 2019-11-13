import React, { Component } from "react"
import { connect } from 'react-redux'
import "./About.css"
import LeafPic from "./LeafPic"
import OurStory from "./OurStory"
import CeoLetter from "./ceoLetter"

class About extends Component {
	render(){

		let ourStoryStyle
		let ceoStyle

		if(this.props.size === "mobile"){
			ourStoryStyle = "our-story our-story-mobile"
			ceoStyle = "ceo-letter ceo-letter-mobile"

		} else {
			ourStoryStyle = "our-story our-story-desktop"
			ceoStyle = "ceo-letter ceo-letter-desktop"
		}


		return (
			<>
				<LeafPic />
				<div className={ourStoryStyle}>
					<OurStory />
				</div>
				<div className={ceoStyle}>
					<CeoLetter />
				</div>
			</>
		)

	}

}

const mapStateToProps = state => {  return {  size: state.size  } }

export default connect(mapStateToProps)(About)
