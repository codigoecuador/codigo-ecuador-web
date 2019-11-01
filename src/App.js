import React from "react";
import "./App.css";
import Navbar from "./features/nav/Navbar";
import Home from "./features/home/Home";
import About from "./features/about/About";
import Blog from "./features/blog/Blog";
import Donate from "./features/donate/Donate";
import Contact from "./features/contact/Contact";
import Activities from './features/activities/Activities'
import {BrowserRouter as Router,Route, Switch,Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path='/'component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/activities' component={Activities}></Route>
          <Route exact path='/blog' component={Blog}></Route>
          <Route exact path='/donate' component={Donate}></Route>
        </div>
      </Router>
      <Navbar />
    </div>
  );
}

export default App;
