import React, { Component } from "react"
import Navbar from '../navbar/Navbar'
import Logo from '../logo/Logo'


class Header extends Component  {
  constructor(props) {
  super()

    this.state = {
        width: window.innerWidth
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  }

  render(){
    let isMobile
    const width = this.state.width
    width <= 1100 ? isMobile = true : isMobile = false

    let navStyle

    let header
    isMobile ? navStyle = "navbar navbar-mobile" : navStyle = "navbar navbar-desktop"


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
