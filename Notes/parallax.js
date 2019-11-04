import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import { Image } from 'semantic-ui-react'

const Experiment = () => {
    return (
        <div>

            <h1>About!</h1>
              <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
                <Image className='aboutImage' size='huge' fluid src='https://images.unsplash.com/photo-1572219479068-8a05d5310ba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80' />
              </Parallax>
                <Image className='topAboutImage' size='huge' src='https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' />

        </div>
    )
}

export default Experiment
