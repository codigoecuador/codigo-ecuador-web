import React from "react";
import { connect } from "react-redux";
import "./Internships.css";

const Internships = () => {
  return (
    <div className='main-container'>
      <div className='headline banner-headline'>
        <span className='gold'>Internships</span>
      </div>
      <h1>Internships!</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps)(Internships);
