import React from "react"
import "./Activities.css"
import EducationBlurb from "./EducationBlurb"
import InternshipBlurb from "./InternshipBlurb"
import EntrpeneurshipBlurb from "./EntrepreneurshipBlurb"
import "../home/Home.css"

const Activities = () => {
	return (
		<div className="blurb-group">
			<div className="blurb">
				<EducationBlurb />
			</div>
			<div className="blurb">
				<InternshipBlurb />
			</div>
			<div className="blurb">
				<EntrpeneurshipBlurb />
			</div>
		</div>
	)
}

export default Activities
