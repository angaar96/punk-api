import React from 'react'
import "./Navbar.scss"
const Navbar = (props) => {
  const { searchForBeer } = props; 
  return (
    <div className="navbar">
      <form className = "navbar__form">
        <label htmlFor = "navbar__form__input"> Which beer are you interested in? </label> 
        <input placeholder="Search for beer by name..." name = "navbar__form__input" className = "navbar__form__input" onChange={searchForBeer}/> 
      </form>
    </div>
  )
}

export default Navbar
