import React from 'react'
import AboutBlurb from './AboutBlurb'
import CoverPic from './CoverPic'
import Activities from '../activities/Activities'


const Home = () => {
    return (
      <>
        <CoverPic />
        <div className="aboutBlurb">
          <AboutBlurb/>
        </div>

        <Activities id="activities" />

      </>
    )
}

export default Home
