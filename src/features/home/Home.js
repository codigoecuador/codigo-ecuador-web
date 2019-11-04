import React from 'react'
import AboutBlurb from './AboutBlurb'
import CoverPic from './CoverPic'


const Home = () => {
    return (
      <>
        <CoverPic />
        <div className="aboutBlurb">
          <AboutBlurb/>
        </div>

      </>
    )
}

export default Home
