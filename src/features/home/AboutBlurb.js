import React, { Component } from 'react'
import { connect } from 'react-redux'
import { aboutBlurbText } from '../../common/activitiesText/aboutText'

class AboutBlurb extends Component {
  render(){
    return (
        <div className="bubble">
          <br/>
          <div className="home-headline">
            {aboutBlurbText[localStorage.getItem("language")].title}
          </div>
          
          {aboutBlurbText[localStorage.getItem("language")].text}
        </div>
    )
  }

}

const mapStateToProps = state => {  return {  language: state.language  } }

export default connect(mapStateToProps)(AboutBlurb)
