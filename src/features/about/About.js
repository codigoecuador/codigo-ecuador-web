import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import { Image } from 'semantic-ui-react'

const About = () => {
    return (
        <div>

            <h1>About!</h1>
              <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                <Image className='aboutImage' fluid src='https://images.unsplash.com/photo-1572219479068-8a05d5310ba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80' />
                test
              </Parallax>
        </div>
    )
}

export default About
