import React from "react"
import "./Navbar.css"
// Capitalized B in above link to make it work
import { Container } from "semantic-ui-react"
import { Link } from "react-router-dom"

const Navbar = () => {


    return (
      <Container className="nav-buttons">
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
        <button class="dropdown-button">Services</button>
        <div class="dropdown-content">
          <a href='/services'>
            Services
          </a>
          <a href='/services/classes'>
            Curriculum
          </a>
          <a href= '/services/mentorship'>
            Mentorship
          </a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropdown-button">Resources</button>
        <div className="dropdown-content">
          <a href='/resources'>
            Our Resources
          </a>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropdown-button">Blog</button>
        <div class="dropdown-content">
          <a href='/blog'>
            Recent Blog Posts
          </a>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropdown-button">Donate</button>
        <div class="dropdown-content">
          <a href='/donate'>
            Help us Succeed
          </a>
        </div>
      </div>




      </Container>
    )
}

export default Navbar
