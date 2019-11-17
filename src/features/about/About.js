import React, { Component } from "react"
import { connect } from 'react-redux'
import "./About.css"
import LeafPic from "./LeafPic"
import OurStory from "./OurStory"
import CeoLetter from "./ceoLetter"
import BoardOfDirectors from "./boardOfDirectors/boardOfDirectors"

class About extends Component {
	render(){

		let ourStoryStyle
		let ceoStyle
		let bOfDStyle

		if(this.props.size === "mobile"){
			ourStoryStyle = "our-story our-story-mobile"
			ceoStyle = "ceo-letter ceo-letter-mobile"
			bOfDStyle = "b-of-D b-of-D-mobile"

		} else {
			ourStoryStyle = "our-story our-story-desktop"
			ceoStyle = "ceo-letter ceo-letter-desktop"
			bOfDStyle = "b-of-D b-of-D-desktop"
		}


		return (
			<>
				<LeafPic />
				<div className={ourStoryStyle}>
					<OurStory />
				</div>
				<div className={bOfDStyle}>
					<BoardOfDirectors />
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
