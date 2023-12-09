import * as React from 'react'

const Header = (props) => {

	return (
		<header className="bgheader">
			<h1>{ props.title }</h1>
			<div className="cta-box">
				{ props.welcomeMessage }
			</div>
		</header>
	)
}

export default Header
