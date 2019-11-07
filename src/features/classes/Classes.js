import React from 'react'
import { Container } from "semantic-ui-react"
import './Classes.css'

const Classes = () => {
    return (
        <Container className="classes">
            <div className="center headline">Our Curriculum</div>

            <p>Código Ecuador uses time-proven methods and curriculum from leading technology companies to train our students.</p>

            ​
            <p>We test new exercises, collect data, and see what best prepares our students for careers in technology. At Código Ecuador, we want to create an engaging learning environment that will instill in our students a creative passion for computer programming.
            </p>

            ​
            <p>Código Ecuador's Python courses prepare students to go beyond basic Python to develop full-length applications to scrape websites, link information to databases, and visualize data. Moreover, they will learn to sharpen and fine-tune their intuition for solving common algorithmic puzzles.</p>


            <p>At the conclusion of the course, students will be empowered to use Python for software engineering, data science, and everyday automation.</p>
        </Container>
    )
}

export default Classes
