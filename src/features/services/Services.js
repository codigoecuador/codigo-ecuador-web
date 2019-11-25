import React, { Component } from "react"
import './Services.css'
import { Container } from "semantic-ui-react"
import Classes from './classes/Classes'
import Mentorship from './mentorship/Mentorship'


class Services extends Component {
  state = {
    showing: ""
  };

  handleClick = event => {
    this.setState({ showing: event.target.value })
  }

  render(){

  renderShowing = () => {
    if (this.state.showing === "classes") {
      return <Classes />;
    } else {
      return <Mentorship />;
    }

    return (

			<Container className="services-container">
        <div className="services-button-group">
          <button className="services-button classes-button" onClick={this.handleClick} value="classes">
            Classes
          </button>

          <button className="services-button mentorship-button" onClick={this.handleClick} value="mentorship">
            Mentorship
          </button>
        </div>

        <div className="services-showing">
          {showing}
        </div>

			</Container>

		)
  }
}

export default Services
