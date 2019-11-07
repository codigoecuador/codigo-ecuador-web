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
			<BrickWallPic />
			<QuitoPic />

			<div className="education-blurb">
				<EducationBlurb />
			</div>

			<div className="internship-blurb">
				<InternshipBlurb />
			</div>

			<div className="entrepreneurship-blurb">
				<EntrpeneurshipBlurb />
			</div>
		</>
	)
}

export default Activities
