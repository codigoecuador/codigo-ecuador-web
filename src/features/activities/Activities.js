import React from "react"
import "./Activities.css"
import BrickWallPic from "./BrickWallPic"
import QuitoPic from "./QuitoPic"
import EducationBlurb from "./EducationBlurb"
import InternshipBlurb from "./InternshipBlurb"
import EntrpeneurshipBlurb from "./EntrepreneurshipBlurb"

const Activities = () => {
	return (
		<>
			<BrickWallPic id="brick-wall-pic"/>
			<QuitoPic />

			<div className="blurb education">
				<EducationBlurb />
			</div>

			<div className="blurb internship">
				<InternshipBlurb />
			</div>

			<div className="blurb entrepreneurship">
				<EntrpeneurshipBlurb />
			</div>
		</>
	)
}

export default Activities
