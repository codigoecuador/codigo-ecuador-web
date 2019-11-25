import React from "react"
import "./Home.css"
import AboutBlurb from "./AboutBlurb"
import CoverPic from "./CoverPic"
import Activities from "../activities/Activities"

const Home = () => {
	return (
		<div className="home-container">
			<CoverPic />

			<div className="about-blurb">
				<AboutBlurb />
			</div>

			<Activities />
		</div>
	)
}

export default Home
