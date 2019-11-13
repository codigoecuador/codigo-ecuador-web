import React, { Component } from "react"
import "./Coding.css"
import { Button } from "semantic-ui-react"
import CodingLinks from "./CodingLinks"

class CodingContainer extends Component {
	state = {
		showing: ""
	}

	handleClick = event => {
		this.setState({ showing: event.target.value })
	}

	render() {
		return (
			<>
				<div className="headline-container">
					<br />
					<br />
					<br />
					<div className="headline">
						<span className="gold">{this.state.showing || "Coding"}</span>
						<span className="navy"> Resources</span>
					</div>
				</div>

				<div className="coding-button-group">
					<br />
					<br />
					<Button.Group vertical>
						<button
							onClick={this.handleClick}
							className="coding-button"
							value="Student"
						>
							For Students
						</button>
						<br />
						<br />
						<button
							onClick={this.handleClick}
							className="coding-button"
							value="Parent"
						>
							For Parents
						</button>
						<br />
						<br />
						<button
							onClick={this.handleClick}
							className="coding-button"
							value="Educator"
						>
							For Educators
						</button>
						<br />
						<br />
						<button
							onClick={this.handleClick}
							className="coding-button"
							value="Entrepreneur"
						>
							For Entrepreneurs
						</button>
						<br />
						<br />
					</Button.Group>
				</div>

				<div className="showing">
					<CodingLinks type={this.state.showing} />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
				</div>
			</>
		)
	}
}

export default CodingContainer
