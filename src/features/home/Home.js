import React, { Component } from "react"
import { connect } from 'react-redux'
import "./Home.css"
import AboutBlurb from "./AboutBlurb"
import AboutBlurbES from "./AboutBlurbES"
import CoverPic from "./CoverPic"
import Activities from "../activities/Activities"

class Home extends Component {

	render(){

		let size
		this.props.size === "mobile" ? size = "about-blurb about-blurb-mobile" : size = "about-blurb about-blurb-desktop"

		return (
			<>
				<CoverPic />

				<div className={size}>
					<AboutBlurb />
				</div>

				<div >
					<Activities />
				</div>

			</>
		)

	}

}

const mapStateToProps = state => {  return {  size: state.size  } }

export default connect(mapStateToProps)(Home)

//this.state.language === "EN" ? about = <AboutBlurb /> : about = <AboutBlurbES />
