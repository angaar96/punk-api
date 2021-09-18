import React from 'react'
import Card from "../Card/Card";
import "./CardList.scss"

const CardList = (props) => {
  const { beerData, searchResults } = props; 
  const cardArr = searchResults.length > 0 ? searchResults.map(beer => { return (
  <Card
  searchResults = {searchResults} 
  name={beer.name} 
  imageUrl = {beer.image_url}
  tagline={beer.tagline} 
  firstBrewed = {beer.first_brewed} 
  description = {beer.description} 
  abv = {beer.abv} 
  pH = {beer.ph}/>
  )}) : beerData ? beerData.map(beer => {
    return (
      <Card
      name={beer.name} 
      imageUrl = {beer.image_url}
      tagline= {beer.tagline} 
      firstBrewed = {beer.first_brewed} 
      description = {beer.description} 
      abv = {beer.abv} 
      pH = {beer.ph}/>
    )}) : [];
  return (
    <div className="card-list">
      {cardArr}
    </div>
  )
}

export default CardList
