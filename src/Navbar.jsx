import * as React from 'react'
import SideMenu from './Sidemenu'

const Navbar = (props) => {

	return (
		<nav className="navbar navbar-dark bg-dark fixed-top"> 
			<div className="container-fluid">
			<a className="navbar-brand" href="#">{ props.title }</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
				MENU <span className="navbar-toggler-icon"></span>
			</button>
			<SideMenu />
			</div>
		</nav>
	)
}

export default Navbar
