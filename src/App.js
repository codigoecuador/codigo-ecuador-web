import React, { Component } from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Sticky} from "semantic-ui-react"
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



class App extends Component {
	constructor(props) {
	super()

		this.state = {
				width: window.innerWidth,
				size: ""
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


			isMobile ? this.setState({ size: "mobile" }) : this.setState({ size: "desktop" })

			return (
				<Router>
					<div>
						<Sticky>
							<Header size={this.state.size}/>
						</Sticky>


						<Switch>
							<Route exact path="/" render={() => <Home size={this.state.size} />}></Route>
							<Route exact path="/about" render={() => <About size={this.state.size} />}></Route>
							<Route exact path="/classes" render={() => <Classes size={this.state.size} />}></Route>
							<Route exact path="/about/partners" render={() => <Partners size={this.state.size}/>} ></Route>
		          <Route exact path="/about/team" render={() => <Team size={this.state.size}/>} ></Route>
							<Route exact path="/resources" render={() => <CodingContainer size={this.state.size}/>}></Route>
							<Route exact path="/resources/research" render={() => <ResearchContainer size={this.state.size}/>}></Route>
							<Route exact path="/blog" render={() => <Blog size={this.state.size}/>}></Route>
							<Route exact path="/donate" render={() => <Donate size={this.state.size}/>}></Route>
						</Switch>


					</div>
		    </Router>
			)

		}
//render if this.state.language === EN ---> language = "EN"

}

export default App
