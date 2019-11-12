import React, { Component } from "react"
import { connect } from 'react-redux'
import "./Activities.css"
import EducationBlurb from "./EducationBlurb"
import InternshipBlurb from "./InternshipBlurb"
import EntrpeneurshipBlurb from "./EntrepreneurshipBlurb"

class Activities extends Component {
	render(){

		//need to DRY this up
		let education
		let internship
		let entrepreneurship

		if(this.props.size === "mobile"){
			education = "blurb blurb-mobile education-mobile"
			internship = "blurb blurb-mobile internship-mobile"
			entrepreneurship = "blurb blurb-mobile entrepreneurship-mobile"
		} else {
			education = "blurb blurb-desktop education-desktop"
			internship = "blurb blurb-desktop internship-desktop"
			entrepreneurship = "blurb blurb-desktop entrepreneurship-desktop"
		}

		return (
			<>

				<div className={education}>
					<EducationBlurb />
				</div>

				<div className={internship}>
					<InternshipBlurb />
				</div>

				<div className={entrepreneurship}>
					<EntrpeneurshipBlurb />
				</div>
			</>
		)

	}

}

const mapStateToProps = state => {  return {  size: state.size  } }

export default connect(mapStateToProps)(Activities)
