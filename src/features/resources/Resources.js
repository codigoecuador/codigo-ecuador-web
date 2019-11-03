import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import Entrepreneurs from './Entrepreneurs'
import Students from './Students'
import Parents from './Parents'
import Educators from './Educators'


class Resources extends Component {
  state = {
    showing: ""
  }

  handleClick = (event) => {
    this.setState({ showing: event.target.value})
  }


  render(){

    let content

    switch(this.state.showing) {
    case "students":
      content = <Students />
      break;
    case "parents":
      content = <Parents />
      break;
    case "educators":
      content = <Educators />
      break;
    case "entrepreneurs":
      content = <Entrepreneurs />
      break;
    default:
      content = <h3>Pick a button</h3>
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
          <br/>
          <br/>

        </div>
      </>
    )
  }
}


export default Resources
