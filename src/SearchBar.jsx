import * as React from 'react'

const SearchBar = () => {
	return (
		<form className="d-flex mt-3" role="search">
			<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
			<button className="btn btn-info" type="submit">Search</button>
		</form>
	)
}

export default SearchBar
