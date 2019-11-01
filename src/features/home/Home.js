import React from 'react'
import AboutBlurb from './AboutBlurb'
import Logo from './Logo'
import CoverPic from './CoverPic'


const Home = () => {
    return (
      <>
        <CoverPic />
        <AboutBlurb className="about"/>
        <Logo />
      </>
    )
}

export default Home
