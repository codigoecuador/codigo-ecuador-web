import React,  { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Divider } from "semantic-ui-react"
import './Classes.css'
import { pythonClasses } from './PythonData'
import { text } from  './pythonClassesText.js'

class Classes extends Component {

  generatePythonClasses = () => {
    return (
    pythonClasses.map(course =>


      <div className={`course-info ${course.color}`}>
        <br/>
        <div className="large python-title">{course.title}</div>
        <br/>
        <h2>
          {course.duration}
        </h2>

        <div className="python-description">
          {course.description}
        </div>
        <br/>
        <div className="python-bullets">
          {course.bulletPoints.map(point =>
            <ul>
              <li>{point}</li>
            </ul>
            )}
        </div>
        <br/>
        <Divider/>
      </div>
      )
    )
  }


  render(){
    let coursesStyle
    this.props.size === "mobile" ? coursesStyle = "courses-mobile" : coursesStyle = "courses-desktop"



    return (
      <Container className={coursesStyle}>
        <div className="courses-text">
          <div className="center headline">
            <span className="gold">Our</span><span className="navy"> Curriculum</span>
          </div>
          {text}
        </div>
        <br/>
        <br/>

        {this.generatePythonClasses()}

          </Container>
        )

  }


}

const mapStateToProps = state => {  return {  size: state.size  } }

export default connect(mapStateToProps)(Classes)
