import React, { Component } from "react";
import { connect } from "react-redux";
import "./About.css";
import OurStory from "./OurStory";
import CeoLetter from "./ceoLetter";

class About extends Component {
    render() {
        return (
          <div className = "about-container" >
              <div className = "our-story" >
                <OurStory / >
              </div>

              <div className = "ceo-letter" >
                <CeoLetter / >
              </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { size: state.size };
};

export default connect(mapStateToProps)(About);
