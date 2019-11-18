import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class OurStory extends Component {
  render(){

    let bubbleStyle
    this.props.size === "mobile" ? bubbleStyle = "about-bubble-mobile" : bubbleStyle = "about-bubble-desktop"
    return (

        <div className={bubbleStyle}>
          <div className="headline">
            <span className="gold">Our</span><span className="navy"> Story</span>
          </div>

          <p>
          At Código Ecuador, we care about creating a more equal world<br/> between countries and across genders.
          <br/>
          We want to train young women to take on technology careers in Ecuador.
          </p>

          <p>
          Our world has a shortage of technology talent and our global economy is plagued by inequality. Research shows that advancing technological skills in developing countries opens up many opportunities that would not otherwise be possible. <a href="/resources/research"><strong>See the research.</strong></a>
          </p>
          <br/>


          <div className="story-links">
            <Link to='/about/partners'>Partners | </Link>
            <Link to='/about/team'>Team | </Link>
            <Link to='/about/board'> Board of Directors</Link>

          </div>

          <br/>
        </div>
    )

  }

}

const mapStateToProps = state => {  return {  size: state.size  } }

export default connect(mapStateToProps)(OurStory)
