import React from 'react'
import AboutBlurb from './AboutBlurb'
import CoverPic from './CoverPic'


const Home = () => {
    return (
      <>
        <CoverPic />
        <div className="about">
          <AboutBlurb/>
        </div>

      </>
    )
}

export default Home
