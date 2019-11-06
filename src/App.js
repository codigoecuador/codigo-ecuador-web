import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import { HashLink as Link } from 'react-router-hash-link';
import Navbar from "./features/navbar/Navbar"
import Home from "./features/home/Home"
import About from "./features/about/About"
import Partners from "./features/about/partners/Partners"
import Team from "./features/about/team/Team"
import Blog from "./features/blog/Blog"
import Donate from "./features/donate/Donate"
import CodingContainer from "./features/resources/coding/CodingContainer"
import ResearchContainer from './features/resources/research/ResearchContainer'
import Activities from "./features/activities/Activities"
import Logo from "./features/logo/Logo"



function App() {

	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route exact path="/" render={() => <Home />}></Route>
					<Route exact path="/about" render={() => <About />}></Route>
					<Route exact path="/activities" render={() => <Activities />}></Route>
					<Route exact path="/about/partners" render={() => <Partners />} ></Route>
          <Route exact path="/about/team" render={() => <Team />} ></Route>
					<Route exact path="/resources" render={() => <CodingContainer />}></Route>
					<Route exact path="/resources/research" render={() => <ResearchContainer />}></Route>
					<Route exact path="/blog" render={() => <Blog />}></Route>
					<Route exact path="/donate" render={() => <Donate />}></Route>
				</Switch>

        <div className="banner">
					<Logo className="logo" />
				</div>
			</div>
    </Router>
	)
}

export default App
