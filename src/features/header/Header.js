import React from "react"
import Navbar from "./navbar/Navbar"
import Logo from "./logo/Logo"
import LanguageToggle from "./LanguageToggle"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<div className="header">
			<div className='ui right item'>
				<LanguageToggle />
			</div>

			<Link exact className="logo-wrapper" to="/">
				<Logo className="logo" />
			</Link>

      <div className = "navbar" >
        <Navbar / >
      </div>


    </div>
  );
}

export default Header
