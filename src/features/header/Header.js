import React, { Component } from "react"
import Navbar from '../navbar/Navbar'
import Logo from '../logo/Logo'
import { connect } from 'react-redux';


class Header extends Component  {

  render(){
    let navStyle
    console.log('header props', this.props.size)
    this.props.size === "mobile" ? navStyle = "navbar navbar-mobile" : navStyle = "navbar navbar-desktop"


  	return (
  		<div className="header">
        <div className={navStyle}>
  			   <Navbar/>
        </div>

        <div className="banner">
          <Logo className="logo" />
        </div>
  		</div>
  	)
  }
}


const mapStateToProps = state => {  return {  size: state.size  } }
export default connect(mapStateToProps)(Header)
