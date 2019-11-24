import React from 'react';
import { connect } from 'react-redux';
import { internshipBlurbText } from '../../common/activitiesText/internshipText';

const InternshipBlurb = () => {
    return (
        <div className="activities-text">
          <br/>
          <div className="sub-headline">
            {internshipBlurbText[localStorage.getItem("language")].title}
          </div>
          {internshipBlurbText[localStorage.getItem("language")].text}

          {internshipBlurbText[localStorage.getItem("language")].button}

        </div>
    )
}

const mapStateToProps = state => { return { language: state.language } }

export default connect(mapStateToProps)(InternshipBlurb)
