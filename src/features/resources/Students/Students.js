import React from 'react'
import { Button } from 'semantic-ui-react'
import { courses } from './StudentsData'

const Students = () => {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            {courses.map(course=>
              <div className="course">
                <h1>{course.title}</h1>
                <h3>{course.subtitle}</h3>
                <Button><a href={course.buttonLink}>Learn More</a></Button>
                <br/>
                <br/>
                <hr/>
              </div>

            )}
        </div>
    )
}

export default Students
