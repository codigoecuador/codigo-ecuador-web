import React, { Component } from "react"
import Navbar from '../navbar/Navbar'
import Logo from '../logo/Logo'


class Header extends Component  {
  constructor(props) {
  super()

    this.state = {
        size: this.props.size
    }
  }


  render(){
    let navStyle

    this.state.size === "mobile" ? navStyle = "navbar navbar-mobile" : navStyle = "navbar navbar-desktop"


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

export default Header
