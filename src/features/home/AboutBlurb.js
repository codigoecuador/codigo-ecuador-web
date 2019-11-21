import React, { Component } from 'react'
import { connect } from 'react-redux'
import { aboutBlurbText } from './aboutText'

class AboutBlurb extends Component {
  render(){

    let headlineStyle
    let bubbleStyle
    let readMore

    if(this.props.size === "mobile"){
      headlineStyle = "home-headline home-headline-mobile"
      bubbleStyle = "bubble-mobile"
    } else {
      headlineStyle = "home-headline home-headline-desktop"
      bubbleStyle = "bubble"
      readMore = <h2>Read more about our work below ...</h2>
    }

    return (
        <div className={bubbleStyle}>
          <br/>
          <div className={headlineStyle}>
            {aboutBlurbText[localStorage.getItem("language")].title}
          </div>
          {aboutBlurbText[localStorage.getItem("language")].text}
        </div>
    )
  }

}

const mapStateToProps = state => {  return {  language: state.language  } }

export default connect(mapStateToProps)(AboutBlurb)
