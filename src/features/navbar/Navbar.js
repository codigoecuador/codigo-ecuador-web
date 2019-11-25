import React from "react"
import "./Navbar.css"
// Capitalized B in above link to make it work
import { Container } from "semantic-ui-react"
import { Link } from "react-router-dom"
import LanguageToggle from '../header/LanguageToggle'


const Navbar = () => {

    return (
      <Container className="nav-buttons">
        <div class="ui small menu">
          <Link className="nav-button" to="/">
            Home
          </Link>
          <Link exact className="nav-button" to="/about">
            About
          </Link>
          <Link exact className="nav-button" to="/services">
            Services
          </Link>
          <Link exact className="nav-button" to="/resources">
            Resources
          </Link>
          <Link exact className="nav-button" to="/blog">
            Blog
          </Link>
          <Link exact className="nav-button" to="/donate">
            Donate
          </Link>
          <div className = "language" >
            <LanguageToggle / >
          </div>
        </div>

      </Container>
    )

}


export default Navbar
