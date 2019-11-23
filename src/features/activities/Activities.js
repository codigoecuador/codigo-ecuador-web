import React, { Component } from "react"
import { connect } from 'react-redux'
import "./Activities.css"
import EducationBlurb from "./EducationBlurb"
import InternshipBlurb from "./InternshipBlurb"
import EntrpeneurshipBlurb from "./EntrepreneurshipBlurb"

class Activities extends Component {
    render() {

        return ( <
            div className = "blurb-group" >
            <
            div className = "blurb" > <
            EducationBlurb / >
            <
            /div> <
            div className = "blurb" >
            <
            InternshipBlurb / >
            <
            /div><
            div className = "blurb" >
            <
            EntrpeneurshipBlurb / >
            <
            /div>< /
            div >
        );

    }

}

const mapStateToProps = state => {  return {  size: state.size  } }

export default connect(mapStateToProps)(Activities)