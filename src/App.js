import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./features/nav/Navbar";
import Home from "./features/home/Home";
import About from "./features/about/About";
import Blog from "./features/blog/Blog";
import Donate from "./features/donate/Donate";
import Resources from "./features/resources/Resources";

import Activities from './features/activities/Activities'


function App() {
  return (
    <Router>
    <div>
         <Navbar />
              <Switch>
                   <Route exact path='/' render={()=>(<Home />)}></Route>
                   <Route exact path='/about' render={()=>(<About />)}></Route>
                   <Route exact path='/activities' render={()=>(<Activities />)}></Route>
                   <Route exact path='/resources' render={()=>(<Resources />)}></Route>
                   <Route exact path='/blog' render={()=>(<Blog />)}></Route>
                   <Route exact path='/donate' render={()=>(<Donate />)}></Route>
             </Switch>



    </div>
    </Router>
  );
}

export default App;
