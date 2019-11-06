import React from "react"
import "./Home.css"
import AboutBlurb from "./AboutBlurb"
import CoverPic from "./CoverPic"
import Activities from "../activities/Activities"

const Home = () => {
	return (
		<>
			<CoverPic />

			<div className="aboutBlurb">
				<AboutBlurb />
			</div>

			<div id="activities">
				<Activities id="activities" />
			</div>
		</>
	)
}

export default Home
