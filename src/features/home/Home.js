import React, { Component } from "react"
import "./Home.css"
import AboutBlurb from "./AboutBlurb"
import AboutBlurbES from "./AboutBlurbES"
import CoverPic from "./CoverPic"
import Activities from "../activities/Activities"

class Home extends Component {
	state = {
		language: "ES"
	}


	render(){
		let about
		this.state.language === "EN" ? about = <AboutBlurb /> : about = <AboutBlurbES />

		return (
			<>
				<CoverPic />

				<div className="about-blurb">
					{about}
				</div>

				<div id="activities">
					<Activities />
				</div>
			</>
		)

	}



}

export default Home
