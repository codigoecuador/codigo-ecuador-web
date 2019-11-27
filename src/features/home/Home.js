<<<<<<< Updated upstream
import React from "react";
import { connect } from "react-redux";
import "./Home.css";
import AboutBlurb from "./AboutBlurb";
import CoverPic from "./CoverPic";
import Activities from "./activities/Activities";

const Home = () => {
  return (
    <div className='home-container'>
      <CoverPic />

      <div className='about-blurb'>
        <AboutBlurb />
      </div>

      <Activities />
    </div>
  );
};

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(Home);
=======
import React, { Component } from "react"
import { connect } from 'react-redux'
import "./Home.css"
import AboutBlurb from "./AboutBlurb"
import CoverPic from "./CoverPic"
import Activities from "../activities/Activities"


class Home extends Component {

    render() {


        return ( <
            >

            <
            CoverPic / >

            <
            div className = "about-blurb" >
            <
            AboutBlurb / >
            <
            /div>

            <
            div >
            <
            Activities / >
            <
            /div>

            <
            />
        )

    }

}

const mapStateToProps = state => {  return {  size: state.size  } }

export default connect(mapStateToProps)(Home)

//this.state.language === "EN" ? about = <AboutBlurb /> : about = <AboutBlurbES />
>>>>>>> Stashed changes
