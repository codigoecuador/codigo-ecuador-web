import React, { Component } from 'react';
import { connect } from 'react-redux';
import { educationBlurbText } from '../../common/educationText';


const EducationBlurb = () => {
    return (
        <div className="bubble">
          <br/>
          <div className="home-headline">
            {educationBlurbText[localStorage.getItem("language")].title}
            
          </div>
          {educationBlurbText[localStorage.getItem("language")].text}
          
            <a className="donate-button" href='https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=info@codigoecuador.com&item_name=Imagina%20C%C3%B3digo%20Ecuador&currency_code=USD' >
              Help us Succeed

            </a>

        </div>
    )
}

const mapStateToProps = state => { return { language: state.language }}

export default connect(mapStateToProps)(EducationBlurb)
