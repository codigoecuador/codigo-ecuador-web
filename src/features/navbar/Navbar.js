import React, { Component } from "react"
import "./Navbar.css"
import { Container } from "semantic-ui-react"
import { Link } from "react-router-dom"
// import { HashLink } from 'react-router-hash-link';

class Navbar extends Component {
	constructor(props) {
	super()

		this.state = {
				width: window.innerWidth
			}
		}

		componentDidMount() {
			window.addEventListener('resize', this.handleWindowSizeChange);
		}

		componentWillUnmount() {
			window.removeEventListener('resize', this.handleWindowSizeChange);
		}

		handleWindowSizeChange = () => {
			this.setState({ width: window.innerWidth });
		}

		render(){
			let isMobile
			const width = this.state.width
			width <= 760 ? isMobile = true : isMobile = false

			let buttonStyle

			isMobile ? buttonStyle = "nav-button-active nav-button-mobile" : buttonStyle = "nav-button-active nav-button-desktop"

		return (

				<Container className="nav-buttons">
					<Link className={buttonStyle} to="/">
						Home
					</Link>
					<Link exact className={buttonStyle} to="/about">
						About
					</Link>
					<Link exact className={buttonStyle} to="/classes">
						Classes
					</Link>
					<Link exact className={buttonStyle} to="/resources">
						Resources
					</Link>
					<Link exact className={buttonStyle} to="/blog">
						Blog
					</Link>
					<Link exact className={buttonStyle} to="/donate">
						Donate
					</Link>
				</Container>

		)
	}
}

export default Navbar

// <HashLink exact className={buttonStyle} to="/#activities">
// 	Activities
// </HashLink>
