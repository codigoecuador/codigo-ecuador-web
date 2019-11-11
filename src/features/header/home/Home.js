import React, { Component } from "react"
import "./Home.css"
import AboutBlurb from "./AboutBlurb"
import AboutBlurbES from "./AboutBlurbES"
import CoverPic from "./CoverPic"
import Activities from "../activities/Activities"

class Home extends Component {
	constructor(props){
		super(props)

		this.state = {
		language: "ES",
		size: this.props.size
	}
}


	render(){
		console.log(this.state.size)
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
