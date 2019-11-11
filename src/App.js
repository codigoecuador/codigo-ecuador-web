import React, { Component } from "react"
import { connect } from 'react-redux'
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import { Sticky} from "semantic-ui-react"
import Home from "./features/home/Home"
import About from "./features/about/About"
import Classes from "./features/classes/Classes"
import Partners from "./features/about/partners/Partners"
import Team from "./features/about/team/Team"
import Blog from "./features/blog/Blog"
import Donate from "./features/donate/Donate"
import CodingContainer from "./features/resources/coding/CodingContainer"
import ResearchContainer from './features/resources/research/ResearchContainer'
import Header from './features/header/Header'
import { setSize } from './actions.js'


class App extends Component {
	constructor(props) {
    super(props)

		this.state = {
				width: window.innerWidth,
				size: "",
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

			let isMobile
			const width = this.state.width
			width <= 760 ? isMobile = true : isMobile = false

			let size
			isMobile ? size = "mobile" :  size = "desktop"
			this.setState({ size: size })

			this.props.setSize(this.state.size)

		}

		render(){




//render if this.state.language === EN ---> language = "EN"
	return (
		<Router>
			<div>
				<Header/>

				<Switch>
					<Route exact path="/" render={() => <Home />}></Route>
					<Route exact path="/about" render={() => <About />}></Route>
					<Route exact path="/classes" render={() => <Classes />}></Route>
					<Route exact path="/about/partners" render={() => <Partners />} ></Route>
          <Route exact path="/about/team" render={() => <Team />} ></Route>
					<Route exact path="/resources" render={() => <CodingContainer />}></Route>
					<Route exact path="/resources/research" render={() => <ResearchContainer />}></Route>
					<Route exact path="/blog" render={() => <Blog />}></Route>
					<Route exact path="/donate" render={() => <Donate />}></Route>
				</Switch>


			</div>
    </Router>
	)

		}

}

const mapStateToProps = state => {  return {  size: state.size  } }
const mapDispatchToProps = dispatch => ({ 
	setSize: setSize => dispatch({type: "SET_SIZE", setSize})   }) 

export default connect(mapStateToProps, mapDispatchToProps)(App)
