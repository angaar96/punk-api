import React from 'react';
import "./FiltersList.scss"; 
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = (props) => {
  const { filterBeers } = props; 
  return (
    <div className = "filters"> 
      <FilterItem filterProperty = "abv" filterLabel = "High ABV (> 6.0%)" filterBeers = {filterBeers}/> 
      <FilterItem filterProperty = "classic" filterLabel = "Classic (Brew Date < 2010)" filterBeers = {filterBeers}/> 
      <FilterItem filterProperty = "acidic" filterLabel = "Acidic (pH < 4)" filterBeers = {filterBeers}/> 
    </div>
  )
}

export default FiltersList