import React from 'react'
import CardList from "../CardList/CardList";
import "./Main.scss"; 

const Main = (props) => {
  const { beerData, searchResults } = props; 
  return (
    <div className = "main"> 
      <CardList searchResults={searchResults} beerData = {beerData}/>
    </div>
  )
}

export default Main
