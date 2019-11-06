import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import CodingLinks from './CodingLinks'


class CodingContainer extends Component {

  state = {
    showing: "",
  }

  handleClick = (event) => {
    debugger
    this.setState({ showing: event.target.value})
  }

  render(){

    return (
      <>
        <div className="resourcesHeadlineContainer">
          <br/>
          <br/>
          <br/>
          <div className="headline">
            <span className="gold">{this.state.showing}</span><span className="navy"> Resources</span>
          </div>

        </div>

        <div className="resourcesButtonGroup">
          <br/>
          <br/>
          <Button.Group vertical>
            <button onClick={this.handleClick}  className="resourceButton" value="Student">For Students</button>
            <br/>
            <br/>
            <button onClick={this.handleClick}  className="resourceButton" value="Parent">For Parents</button>
            <br/>
            <br/>
            <button onClick={this.handleClick} className="resourceButton" value="Educator">For Educators</button>
            <br/>
            <br/>
            <button onClick={this.handleClick} className="resourceButton" value="Entrepreneur">For Entrepreneurs</button>
            <br/>
            <br/>
          </Button.Group>
        </div>

        <div className="showing">
          <CodingLinks type={this.state.showing} />
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


export default CodingContainer
