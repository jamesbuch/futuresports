import * as React from 'react'

const DropDownMenu = () => {
	return (
		<li className="nav-item dropdown">
			<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
			Site Information
			</a>
			<ul className="dropdown-menu dropdown-menu-dark">
				<li><a className="dropdown-item" href="#terms">Terms and conditions</a></li>
				<li><a className="dropdown-item" href="#privacy">Privacy statement</a></li>
				<li><a className="dropdown-item" href="#copyright">Copyright</a></li>
				<li>
					<hr className="dropdown-divider" />
				</li>
				<li><a className="dropdown-item" href="#contact">Contact</a></li>
			</ul>
		</li>
	)
}

export default DropDownMenu
