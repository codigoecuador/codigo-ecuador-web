import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import ResourceLinks from './ResourceLinks'



class ResourcesContainer extends Component {

  state = {
    showing: "",
  }

  handleClick = (event) => {
    debugger
    this.setState({ showing: event.target.value})
  }

  render(){

    let content
    let headline

    switch(this.state.showing) {
    case "students":
      content = <ResourceLinks type={this.state.showing}/>
      headline = <><span className="gold">Student</span><span className="navy"> Resources</span></>
      break;

    case "parents":
      content = <ResourceLinks type={this.state.showing}/>
      headline = <><span className="gold">Parent</span><span className="navy"> Resources</span></>
      break;

    case "educators":
      content = <ResourceLinks type={this.state.showing} />
      headline = <><span className="gold">Teaching</span><span className="navy"> Resources</span></>
      break;

    case "entrepreneurs":
      content = <ResourceLinks type={this.state.showing} />
      headline = <><span className="gold">Resources</span><span className="navy"> for Entrepreneurs</span></>
      break;

    default:
      content = <h1>Click any button on the left to see resources.</h1>
      headline = <><span className="gold">Coding</span><span className="navy"> Resources </span></>
    }


    return (
      <>
        <div className="resourcesHeadline big">
          { headline }
          <br/>
        </div>
        <div className="resourcesButtonGroup">
          <br/>
          <br/>
          <Button.Group vertical>
            <button onClick={this.handleClick}  className="resourceButton" value="students">For Students</button>
            <br/>
            <br/>
            <button onClick={this.handleClick}  className="resourceButton" value="parents">For Parents</button>
            <br/>
            <br/>
            <button onClick={this.handleClick} className="resourceButton" value="educators">For Educators</button>
            <br/>
            <br/>
            <button onClick={this.handleClick} className="resourceButton" value="entrepreneurs">For Entrepreneurs</button>
            <br/>
            <br/>
          </Button.Group>
        </div>

        <div className="showing">
          { content }
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

        </div>
      </>
    )
  }
}


export default ResourcesContainer
