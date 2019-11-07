import React from 'react'
import { Container, Divider } from "semantic-ui-react"
import './Classes.css'
import { pythonClasses } from './PythonData'
import { text } from  './pythonClassesText.js'

const Classes = () => {
    return (
        <Container className="courses">
          <div className="courses-text">
            <div className="center headline">Our Curriculum</div>
              {text}

          </div>

          <div className="courses-list">
            {pythonClasses.map(course =>
              <>
                <br/>
                <div className="large python-title">{course.title}</div>
                <br/>
                <div className="medium">
                  {course.hours}
                  <br/>
                  {course.weeks}
                </div>

                <div className="python-description">
                  {course.description}
                </div>
                <div className="python-bullets">
                  {course.bulletPoints.map(point =>
                    <ul>
                      <li>{point}</li>
                    </ul>
                    )}
                </div>
                <br/>
                <Divider/>
              </>
              )}

            </div>
          </Container>
        )

}

export default Classes
