import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import Courses from './Courses'


class Resources extends Component {
    state = {
      showing: ""
    }

    handleClick = (event) => {
      this.setState({ showing: event.target.value})
    }



  render(){

    let content

    if(this.state.showing === "students"){
      content = <Courses />
    }


    return (
      <>
        <div className="resources">
          <h1>Resources!</h1>
          <br/>
          <br/>
          <Button.Group vertical>
            <Button onClick={this.handleClick} value="entrepreneurs">For Entrepreneurs</Button>
            <br/>
            <br/>
            <Button onClick={this.handleClick} value="students">For Students</Button>
            <br/>
            <br/>
            <Button onClick={this.handleClick} value="parents">For Parents</Button>
            <br/>
            <br/>
            <Button onClick={this.handleClick} value="educators">For Educators</Button>
          </Button.Group>
        </div>

        <div className="showing">
          { content }
        </div>
      </>
    )

  }


}

export default Resources
