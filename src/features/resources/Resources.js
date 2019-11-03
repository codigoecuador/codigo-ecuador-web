import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import Entrepreneurs from './Entrepreneurs'
import Students from './Students/Students'
import Parents from './Parents'
import Educators from './Educators'


class Resources extends Component {
  state = {
    showing: "",
    color: ""
  }

  handleClick = (event) => {
    this.setState({ showing: event.target.value})
  }




  render(){

    let content
    let headline

    switch(this.state.showing) {
    case "students":
      content = <Students />
      headline = "Student Resources"
      break;
    case "parents":
      content = <Parents />
      headline = "Parent Resources"
      break;
    case "educators":
      content = <Educators />
      headline = "Teaching Resources"
      break;
    case "entrepreneurs":
      content = <Entrepreneurs />
      headline = "Resources for Entrepreneurs"
      break;
    default:
      content = <h3>Pick a button</h3>
      headline = "Coding Resources"
    }


    return (
      <>
        <div className="resourcesHeadline massive">
          { headline }
          <br/>
        </div>
        <div className="resourcesButtons">
          <br/>
          <br/>
          <Button.Group vertical>
            <Button onClick={this.handleClick} className="ui green button" value="entrepreneurs">For Entrepreneurs</Button>
            <br/>
            <br/>
            <Button onClick={this.handleClick}  className="ui purple button" value="students">For Students</Button>
            <br/>
            <br/>
            <Button onClick={this.handleClick}  className="ui blue button" value="parents">For Parents</Button>
            <br/>
            <br/>
            <Button onClick={this.handleClick} className="ui orange button" value="educators">For Educators</Button>
          </Button.Group>
        </div>

        <div className="showing">
          { content }
          <br/>
          <br/>

        </div>
      </>
    )
  }
}


export default Resources
