import React from 'react'
import { Divider } from 'semantic-ui-react'
import { courses } from './StudentsData'

const Students = () => {
    return (
        <div>
            {courses.map(course=>
              <div className="course">
                <h1>{course.title}</h1>
                <h3>{course.subtitle}</h3>
                <button className="studentButton"><a href={course.buttonLink}>Learn More</a></button>
                <br/>
                <br/>
                <Divider />
              </div>

            )}
        </div>
    )
}

export default Students
