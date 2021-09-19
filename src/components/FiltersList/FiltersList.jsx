import React from 'react';
import "./FiltersList.scss"; 
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = (props) => {
  const { filterBeersAbv, filterBeersAcidic, filterBeersClassic } = props; 
  return (
    <div className = "filters"> 
      <FilterItem filterProperty = "abv" filterLabel = "High ABV (> 6.0%)" filterBeers = {filterBeersAbv}/> 
      <FilterItem filterProperty = "classic" filterLabel = "Classic (Brew Date < 2010)" filterBeers = {filterBeersClassic}/> 
      <FilterItem filterProperty = "acidic" filterLabel = "Acidic (pH < 4)" filterBeers = {filterBeersAcidic}/> 
    </div>
  )
}

export default FiltersList