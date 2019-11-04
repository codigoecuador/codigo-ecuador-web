import React from "react";
import {Link} from 'react-router-dom';
import About from '../about/About'
import Blog from '../blog/Blog'
import Donate from '../donate/Donate'
import Home from '../home/Home'
import Contact from '../contact/Contact'
import Activities from '../activities/Activities'

const Navbar = () => {

          return (
                 <div className="navbar">
                  <Link className="active" to='/'>Home</Link>
                  <Link exact className="active" to="/about">About</Link>
                  <Link exact className="active" to="/activities">Activities</Link>
                  <Link exact className="active" to="/resources">Resources</Link>
                  <Link exact className="active" to="/blog">Blog</Link>
                  <Link exact className="active" to="/donate">Donate</Link>
                </div>

          );
        };

export default Navbar;
