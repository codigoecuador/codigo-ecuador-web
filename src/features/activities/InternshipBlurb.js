import React from 'react';
import { connect } from 'react-redux';
import { internshipBlurbText } from '../../common/activitiesText/internshipText';

const InternshipBlurb = () => {
    return (
        <div className="activities">
          <br/>
          <div className="sub-headline">
            {internshipBlurbText[localStorage.getItem("language")].title}
          </div>

          <div className="activities-description">
            {internshipBlurbText[localStorage.getItem("language")].text}
          </div>

          <div className="activities-button">
            {internshipBlurbText[localStorage.getItem("language")].button}
          </div>

        </div>
    )
}

const mapStateToProps = state => { return { language: state.language } }

export default connect(mapStateToProps)(InternshipBlurb)
