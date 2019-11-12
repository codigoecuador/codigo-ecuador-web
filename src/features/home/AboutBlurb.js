import React, { Component } from 'react'
import { connect } from 'react-redux'

class AboutBlurb extends Component {
  render(){

    let headlineStyle
    this.props.size === "mobile" ? headlineStyle = "home-headline home-headline-mobile" : headlineStyle = "home-headline home-headline-desktop"


    return (
        <div className="bubble">
          <br/>
          <div className={headlineStyle}>
            We empower the women of Ecuador by teaching them to code.
          </div>

          <p>Código Ecuador is a nonprofit organization working to promote technology skills and computer programming careers<br/> for high school students in Ecuador, with a focus on female empowerment.</p>

          <p>We believe that improving access to computer science curricula promotes global equity,<br/> and that collective action makes great changes in this world.</p>

          <h2>Read more about our work below ...</h2>

          <br/>
        </div>
    )

  }




}

const mapStateToProps = state => {  return {  size: state.size  } }

export default connect(mapStateToProps)(AboutBlurb)
