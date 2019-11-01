import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./features/nav/Navbar";
import Home from "./features/home/Home";
import About from "./features/about/About";
import Blog from "./features/blog/Blog";
import Donate from "./features/donate/Donate";
import Contact from "./features/contact/Contact";
import Activities from './features/activities/Activities'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/blog" render={() => <Blog />} />
        <Route exact path="/activities" render={() => <Activities />} />
        <Route exact path="/donate" render={() => <Donate />} />
        <Route exact path="/contact" render={() => <Contact />} />
      </Switch>
    </div>
  );
}

export default App;
