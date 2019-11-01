import React from "react";
import {BrowserRouter as Router,Route, Switch,Link} from 'react-router-dom';
import About from '../about/About'
import Blog from '../blog/Blog'
import Donate from '../donate/Donate'
import Home from '../home/Home'
import Contact from '../contact/Contact'

const Navbar = () => {



          return (
            <Router>
                 <div>
             <Navbar>
                  <Link exact activeClassName="active" to="/about">
                    About
                  </Link>

                  <Link exact activeClassName="active" to="/programs">
                    Programs
                  </Link>

                  <Link exact activeClassName="active" to="/blog">
                    Blog
                  </Link>

                  <Link exact activeClassName="active" to="/donate">
                    Donate
                  </Link>
              </Navbar>

             

                  

                  

                    </div>
            </Router>
            
          );
        };

export default Navbar;
