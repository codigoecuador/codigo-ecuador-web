import React, { Component } from "react"
import { connect } from "react-redux"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import { Sticky} from "semantic-ui-react"
import About from "./features/about/About"
import Blog from "./features/blog/Blog"
import Classes from "./features/services/classes/Classes"
import Internships from "./features/services/internships/Internships"
import CodingContainer from "./features/resources/coding/CodingContainer"
import Donate from "./features/donate/Donate"
import Header from "./features/header/Header"
import Home from "./features/home/Home"
import Mentorship from "./features/services/mentorship/Mentorship"
import PartnersContainer from "./features/about/partners/PartnersContainer"
import ResearchContainer from "./features/resources/research/ResearchContainer"
import Team from "./features/about/team/Team"
import BoardOfDirectors from "./features/about/boardOfDirectors/boardOfDirectors"
import Footer from "./features/footer/Footer.js"

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			width: window.innerWidth
		}
	}
	componentDidMount() {
		window.addEventListener("resize", this.handleWindowSizeChange)
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.handleWindowSizeChange)
	}
	handleWindowSizeChange = () => {
		this.setState({ width: window.innerWidth })
	}

	render() {
		if (!localStorage.getItem("language")) {
			localStorage.setItem("language", "EN")
		}

		let isMobile
		const width = this.state.width
		const setSize = this.props.setSize
		width <= 700 ? setSize("mobile") : setSize("desktop")

		return (
			<Router>
				<div>
					<Header />

					<Switch>
						<Route
							exact
							path="/about"
							render={() => <About />}
						></Route>
						<Route
							exact
							path="/blog"
							render={() => <Blog />}
						></Route>
						<Route
							exact
							path="/services/classes"
							render={() => <Classes />}
						></Route>
						<Route
							exact
							path="/services/internships"
							render={() => <Internships />}
						></Route>
						<Route
							exact
							path="/resources"
							render={() => <CodingContainer />}
						></Route>
						<Route
							exact
							path="/donate"
							render={() => <Donate />}
						></Route>
						<Route exact path="/" render={() => <Home />}></Route>
						<Route
							exact
							path="/services/mentorship"
							render={() => <Mentorship />}
						></Route>
						<Route
							exact
							path="/about/partners"
							render={() => <PartnersContainer />}
						></Route>
						<Route
							exact
							path="/resources/research"
							render={() => <ResearchContainer />}
						></Route>
						<Route
							exact
							path="/about/team"
							render={() => <Team />}
						></Route>
						<Route
							exact
							path="/about/board"
							render={() => <BoardOfDirectors />}
						></Route>
					</Switch>
				</div>
			</Router>
		)
	}
}

const mapStateToProps = (state) => {
	return { size: state.size }
}

const mapDispatchToProps = (dispatch) => ({
	setSize: (size) => dispatch({ type: "SET_SIZE", size }),
	setLanguage: (language) => dispatch({ type: "SET_LANGUAGE", language })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
