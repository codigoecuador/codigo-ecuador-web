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
    let classesButtonStyle
    let mentorButtonStyle
    let servicesShowing

//need to DRY this up
    if(this.props.size === "mobile"){
      buttonGroup = "services-button-group-mobile"
      classesButtonStyle = "services-button-mobile classes-button"
      mentorButtonStyle = "services-button-mobile mentorship-button"
      servicesShowing = "services-showing-mobile"
    } else {
      buttonGroup = "services-button-group-desktop"
      classesButtonStyle = "services-button-desktop classes-button"
      mentorButtonStyle = "services-button-desktop mentorship-button"
      servicesShowing = "services-showing-desktop"
    }




    return (

			<Container className="services-container">
        <div className={buttonGroup}>
          <button className={classesButtonStyle} onClick={this.handleClick} value="classes">
            Classes
          </button>

          <button className={mentorButtonStyle} onClick={this.handleClick} value="mentorship">
            Mentorship
          </button>
        </div>

        <div className={servicesShowing}>
          {showing}
        </div>

			</Container>

		)


  }


}


const mapStateToProps = state => {  return {  size: state.size  } }

export default connect(mapStateToProps)(Services)
