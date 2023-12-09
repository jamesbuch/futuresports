import * as React from 'react'
import SearchBar from './Searchbar'
import DropDownMenu from './DropDownMenu'

const SideMenu = () => {

	return (
		<div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
			<div className="offcanvas-header">
				<h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">FutureSports Menu</h5>
				<button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div className="offcanvas-body">
				<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="#">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#statistics">Sports Statistics</a>
					</li>
					<li className="nav-item">
					<a className="nav-link" href="#news">Club News</a>
					</li>
					<li className="nav-item">
					<a className="nav-link" href="#">Teams</a>
					</li>
					<li className="nav-item">
					<a className="nav-link" href="#">Volunteers</a>
					</li>
					<DropDownMenu />
				</ul>
				<SearchBar />
			</div>
		</div>
	)
}

export default SideMenu
