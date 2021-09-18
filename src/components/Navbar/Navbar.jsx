import React from 'react'
import "./Navbar.scss"
const Navbar = (props) => {
  const { searchForBeer } = props; 
  return (
    <div className="navbar">
      <form className = "navbar__form">
        <label htmlFor = "navbar__form__input" className = "navbar__form__input-label"> Curious about a beer? </label> 
        <input placeholder="Search for a beer..." id = "navbar__form__input" name = "navbar__form__input" className = "navbar__form__input" onChange={searchForBeer}/>
        <div className = "navbar__form__filters"> 
          <label for="navbar__form__filters__abv"> High ABV (&gt; 6.0%) </label>
          <input type="checkbox" id="navbar__form__filters__abv" name="navbar__form__filters__abv" className="navbar__form__filters__abv" value=""/>
          <label for="navbar__form__filters__classic"> Classic Range </label>
          <input type="checkbox" id="navbar__form__filters__classic" name="navbar__form__filters__classic" className="navbar__form__filters__classic" value=""/>
          <label for="navbar__form__filters__acidic"> Acidic (pH &lt; 4) </label>
          <input type="checkbox" id="navbar__form__filters__acidic" name="navbar__form__filters__acidic" className="navbar__form__filters__acidic" value=""/>
        </div>
      </form>
    </div>
  )
}

export default Navbar
