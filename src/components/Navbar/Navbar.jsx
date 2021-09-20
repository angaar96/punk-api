import React from 'react'
import "./Navbar.scss"
import FiltersList from '../FiltersList/FiltersList';

const Navbar = (props) => {
  const { searchForBeer, filterBeers } = props; 
  return (
    <div className="navbar">
      <form className = "navbar__form">
        <label htmlFor = "navbar__form__input" className = "navbar__form__input-label"> Curious about a Brewdog beer? </label> 
        <input placeholder="Search for a beer..." id = "navbar__form__input" name = "navbar__form__input" className = "navbar__form__input" onChange={searchForBeer}/>
        <h2 className = "navbar__form__filters-label"> Filters: </h2> 
        <FiltersList filterBeers = {filterBeers} />
      </form>
    </div>
  )
}

export default Navbar
