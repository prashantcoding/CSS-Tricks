import React from 'react'
import './searchbarStyle.css'
const SearchBar = () => {
  return (
    <div className="searchbar__container">
        <div className="searchbarItem">
            <input className='searchbarItem--searchBar' placeholder='search'></input>
            <p className='searchbarItem--item'>Categories</p>
            <p className='searchbarItem--item'>Brands</p>
            <p className='searchbarItem--item'>Offers</p>
        </div>
        <div className="searchbarItem">
            <p className='searchbarItem--item'>Cart</p>
        </div>

    </div>
  )
}

export default SearchBar