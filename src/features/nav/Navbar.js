import React from "react";
import {BrowserRouter as Router,Route, Switch,Link} from 'react-router-dom';
import About from '../about/About'
import Blog from '../blog/Blog'
import Donate from '../donate/Donate'
import Home from '../home/Home'
import Contact from '../contact/Contact'

const NavBar = () => {



          return (
            <Router>
           
                 <div className='main-navbar'>
                   <Link className="active" to='/'>Home</Link>
              
                  <Link exact className="active" to="/about">
                    About
                  </Link>

                  <Link exact className="active" to="/programs">
                    Programs
                  </Link>

                  <Link exact className="active" to="/blog">
                    Blog
                  </Link>

                  <Link exact className="active" to="/donate">
                    Donate
                  </Link>

                  <Switch>
                    <Route exact path='/'r ender={()=>(<Home />)}></Route>
                    <Route path='/about' render={()=>(<About />)}></Route>
                    <Route path='/prgorams'></Route>
                    <Route path='/blog' render={()=>(<Blog />)}></Route>
                    <Route path='/donate' render={()=>(<Donate />)}></Route>
                  </Switch>
                 
              

            
      
              </div>
             

              </Router>

                  

                
           
            
          );
        };

export default NavBar;
