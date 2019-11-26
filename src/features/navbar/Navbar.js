import React from "react"
import "./Navbar.css"
// Capitalized B in above link to make it work
import { Container } from "semantic-ui-react"
import { Link } from "react-router-dom"

const Navbar = () => {

    return (
      <Container className="dropdown-button-group">
      <div class="dropdown">
        <button class="dropdown-button">About</button>
        <div class="dropdown-content">
          <a href='/about'>
            Our Story
          </a>
          <a href='/about/partners'>
            Partners
          </a>
          <a href= '/about/team'>
            Team
          </a>
          <a href='/about/board'>
            Board of Directors
          </a>
        </div>
      </div>

      <div class="dropdown">
        <button className="dropdown-button">Services</button>
        <div class="dropdown-content">
          <a href='/services/classes'>
            Curriculum
          </a>
          <a href= '/services/mentorship'>
            Mentorship
          </a>
        </div>
      </div>


      <Link exact className="dropdown" to="/resources">
        <button className="dropdown-button">Resources</button>
      </Link>

      <Link exact className="dropdown" to="/blog">
        <button className="dropdown-button">Blog</button>
      </Link>

      <Link exact className="dropdown" to="/donate">
        <button className="dropdown-button">Donate</button>
      </Link>

      </Container>
    )
}

export default Navbar
