import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ourStoryText } from '../../common/aboutText/ourStoryText' 

class OurStory extends Component {
  render(){

    // let bubbleStyle
    // this.props.size === "mobile" ? bubbleStyle = "about-bubble-mobile" : bubbleStyle = "about-bubble-desktop"
    return (

        <div className="about-bubble">
          <div className="headline">
    <span className="gold">{ourStoryText[localStorage.getItem("language")].goldTitle}</span><span className="navy">{ourStoryText[localStorage.getItem("language")].navyTitle}</span>
          </div>
          {ourStoryText[localStorage.getItem("language")].text}


          {ourStoryText[localStorage.getItem("language")].links}



          <br/>
        </div>
    )

  }

}

const mapStateToProps = state => {  return {  language: state.language  } }

export default connect(mapStateToProps)(OurStory)
