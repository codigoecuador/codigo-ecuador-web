import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import ResourceLinks from './ResourceLinks'
import BannerVideo from './BannerVideo'



class ResourcesContainer extends Component {

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
        <BannerVideo />
        <div className="resourcesHeadlineContainer">
          <br/>
          <br/>
          <br/>
          <span className="big gold">{this.state.showing}</span><span className="big navy"> Resources</span>
          <br/>
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
          <ResourceLinks type={this.state.showing} />
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
