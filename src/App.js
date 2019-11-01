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
      <Home />
    </div>
  );
}

export default App;
