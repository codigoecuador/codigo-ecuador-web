import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';
import Navbar from "./Navbar"
import Home from "../home/Home"
import About from "../about/About"
import Partners from "../about/partners/Partners"
import Team from "../about/team/Team"
import Blog from "../blog/Blog"
import Donate from "../donate/Donate"
import CodingContainer from "../resources/coding/CodingContainer"
import ResearchContainer from '../resources/research/ResearchContainer'
import Activities from "../activities/Activities"
import Logo from "./Logo"


const Header = () => {

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

export default Header
