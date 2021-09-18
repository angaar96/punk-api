import React from 'react'; 
import "./Card.scss"; 
const Card = (props) => {
  const {name, tagline, firstBrewed, description, abv, pH, imageUrl} = props;
  return (    
    <div className="card">
      <h1 className="card__name"> {name} </h1>
      <img className="card__img" src = {imageUrl} alt="beer" />
      <h3 className="card__tagline"> {tagline}</h3>
      <h3 className="card__first-brewed"> First Brewed: {firstBrewed} </h3>
      <p className="card__description"> Description: {description} </p>
      <p className="card__abv"> abv: {abv} </p>
      <p className="card__ph"> pH: {pH} </p> 
    </div>
  )
}

export default Card
