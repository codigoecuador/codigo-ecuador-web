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

			<div className="educationBlurb">
				<EducationBlurb />
			</div>

			<div className="internshipBlurb">
				<InternshipBlurb />
			</div>

			<div className="entrepreneurshipBlurb">
				<EntrpeneurshipBlurb />
			</div>
		</>
	)
}

export default Activities
