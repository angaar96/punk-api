import './App.scss';
import React, {useState, useEffect} from "react";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [beerData, setBeerData] = useState(""); 
  const [searchResults, setSearchResults] = useState(""); 
  
  const fetchBeerData = () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(jsonResponse => setBeerData(jsonResponse))
    .catch(err => console.log("err"));
  }

  // use useEffect to fetch data from API immediately on render. 

  useEffect(fetchBeerData, [])
  const searchForBeer = (e) => {
    e.preventDefault(); 
    e.target.value ? setSearchResults(beerData.filter(beer => beer.name.includes(`${e.target.value[0].toUpperCase()}${e.target.value.split("").splice(1, e.target.value.length).join("")}`))) : setSearchResults(searchResults => searchResults = []); 
  }

  const filterBeers = (e) => {
    switch(e.target.value) {
      case "abv":
        e.target.checked ? setBeerData(beerData.filter(beer => beer.abv > 6)) : fetchBeerData();
        break;
      case "classic":
        e.target.checked ? setBeerData(beerData.filter(beer => parseInt(beer.first_brewed.split("/")[1]) < 2010)) : fetchBeerData();
        break;
      case "acidic":
        e.target.checked ? setBeerData(beerData.filter(beer => beer.ph < 4)) : fetchBeerData(); 
        break;
      default:
        break; 
    }
  }

  return (
    <div className="App">
      <Navbar searchForBeer={searchForBeer} filterBeers={filterBeers} />
      <Main searchResults={searchResults} beerData = {beerData} />
    </div>
  );
}

export default App
