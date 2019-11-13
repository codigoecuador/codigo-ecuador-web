import React, { Component } from "react"
import './Services.css'
import { Container } from "semantic-ui-react"
import Classes from './classes/Classes'
import Mentorship from './mentorship/Mentorship'


class Services extends Component {
  state = {
    showing: ""
  }

  handleClick = event => {
    this.setState({ showing: event.target.value })
  }


  render(){

    let showing
    if(this.state.showing === "classes"){
      showing = <Classes />
    } else {
      showing = <Mentorship />
    }

    return (

			<Container className="services-container">

          <button onClick={this.handleClick} value="classes">
            Classes
          </button>

          <button onClick={this.handleClick} value="mentorship">
            Mentorship
          </button>

          {showing}

			</Container>

		)


  }






}


export default Services
