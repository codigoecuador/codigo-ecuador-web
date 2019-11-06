import React from "react"
import Navbar from '../navbar/Navbar'
import Logo from '../logo/Logo'


const Header = () => {
	return (
		<>
			<Navbar/>
      <div className="banner">
        <Logo className="logo" />
      </div>
		</>
	)
}

export default Header
