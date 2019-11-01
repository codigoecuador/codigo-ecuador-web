import React from 'react'
import AboutBlurb from './AboutBlurb'
import { logo } from './codigo-logo-small.jpg'


const Home = () => {
    return (
        <>

            <img className="image" src="https://images.unsplash.com/photo-1498661694102-0a3793edbe74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1893&q=80" alt="young Latin American women"/>
            <div className="overlay center">
                <span className="massive">Código Ecuador</span>
                <h1>help us empower the women of Ecuador by teaching them to code</h1>
            </div>

            <div className="about">
              <AboutBlurb />
              <br/>
            </div>

            <div className="logo">
              {logo}>
            </div>


        </>
    )
}

export default Home
