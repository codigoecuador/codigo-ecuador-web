import React, { Component } from "react"
import { connect } from 'react-redux'
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

    let buttonGroup
    this.props.size === "mobile" ? buttonGroup = "services-button-group-mobile" : buttonGroup = "services-button-group-desktop"




    return (

			<Container className="services-container">
        <div className={buttonGroup}>
          <button className="services-button classes-button" onClick={this.handleClick} value="classes">
            Classes
          </button>

          <button className="services-button mentorship-button " onClick={this.handleClick} value="mentorship">
            Mentorship
          </button>
        </div>

          {showing}

			</Container>

		)


  }


}


const mapStateToProps = state => {  return {  size: state.size  } }

export default connect(mapStateToProps)(Services)
