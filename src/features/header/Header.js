import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Logo from "../logo/Logo";
import { connect } from "react-redux";
import LanguageToggle from "./LanguageToggle";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        // let navStyle
        // console.log('header props', this.props.size)
        // this.props.size === "mobile" ? navStyle = "navbar navbar-mobile" : navStyle = "navbar navbar-desktop"

        return (
          <div className = "header" >
            <Link exact className = "logo-wrapper" to = "/" >
              <Logo className = "logo" / >
            </Link>

            <div className = "navbar" >
              <Navbar / >
            </div>

            <div className = "language-dropdown" >
              <LanguageToggle / >
            </div>
          </div>
        );
    }
}

const mapStateToProps = state => {
    return { size: state.size };
};
export default connect(mapStateToProps)(Header);
