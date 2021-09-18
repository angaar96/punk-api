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
  useEffect(fetchBeerData, [])
  const searchForBeer = (e) => {
    e.preventDefault(); 
    fetchBeerData();
    beerData && setSearchResults(beerData.filter(beer => beer.name.includes(e.target.value)));
  }

  return (
    <div className="App">
      <Navbar searchForBeer={searchForBeer}/>
      <Main searchResults={searchResults} beerData = {beerData} />
    </div>
  );
}

export default App
