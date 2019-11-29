import React from "react";
import { connect } from "react-redux";
import Navbar from "./navbar/Navbar";
import Logo from "./logo/Logo";
import LanguageToggle from "./LanguageToggle";
import { Link } from "react-router-dom";
import MobileNavbar from "./mobileNavbar/MobileNavbar";

const Header = props => {
  let desktopNavbar = (
    <div className="navbar">
      <Navbar />
    </div>
  );

  let mobileNavbar = (
    <div className="mobile-navbar">
      <MobileNavbar />
    </div>
  );

  let navbar = props.size === "mobile" ? mobileNavbar : desktopNavbar;

  return (
    <div className="header">
      <div className="ui right item language-dropdown">
        <LanguageToggle />
      </div>

      <div className="logo-wrapper">
        <Link exact to="/">
          <Logo className="logo" />
        </Link>
      </div>

      {navbar}
    </div>
  );
};

const mapStateToProps = state => {
  return { size: state.size.size };
};

export default connect(mapStateToProps)(Header);
