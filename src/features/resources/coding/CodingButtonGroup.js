import React from "react"
import { connect } from "react-redux"
import "./Coding.css"
import { Button, Sticky } from "semantic-ui-react"
import { codingText } from "../../../common/resourcesText/codingText"

const CodingButtonGroup = (props) => {
	//grabs language from localStorage and select text from codingText object
	const language = localStorage.getItem("language")
	const buttons = codingText[language].buttons

	const renderButtons = (buttons) => {
		return buttons.map((b) => {
			return (
				<button
					onClick={props.handleClick}
					className="coding-button"
					value={b.name}
				>
					{b.text}
				</button>
			)
		})
	}
	return (
		<Sticky>
			<div className="coding-button-group">
				<br />
				<br />
				<Button.Group vertical>
					{renderButtons(buttons)}
					<br />
					<br />
				</Button.Group>
			</div>
		</Sticky>
	)
}
const mapStateToProps = (state) => {
	return {
		language: state.language
	}
}

export default connect(mapStateToProps)(CodingButtonGroup)
