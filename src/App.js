import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./features/home/Home";
import About from "./features/about/About";
import Blog from "./features/blogs/Blog";
import News from "./features/news/News";
import Partners from "./features/partners/Partners";
import Team from "./features/team/Team.js";
import Navbar from "./features/nav/Navbar";
import Contact from "./features/contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/blogs" render={() => <Blog />} />
        <Route exact path="/news" render={() => <News />} />
        <Route exact path="/partners" render={() => <Partners />} />
        <Route exact path="/team" render={() => <Team />} />
        <Route exact path="/contact" render={() => <Contact />} />
      </Switch>
    </div>
  );
}

export default App;
