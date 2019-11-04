import React from "react";
import { Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



const Navbar = () => {

          return (
                 <Container className="navbar">
                  <Link className="active" to='/'>Home</Link>
                  <Link exact className="active" to="/about">About</Link>
                  <Link exact className="active" to="/#activities">Activities</Link>
                  <Link exact className="active" to="/resources">Resources</Link>
                  <Link exact className="active" to="/blog">Blog</Link>
                  <Link exact className="active" to="/donate">Donate</Link>
                </Container>

          );
        };

export default Navbar;

//                  <Link exact className="active" to="/activities">Activities</Link>
