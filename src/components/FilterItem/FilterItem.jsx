import React from 'react';
import "./FilterItem.scss";

const FilterItem = (props) => {
  const { filterProperty, filterLabel, filterBeers } = props; 
  return (
    <>
      <label for = {`filters__${filterProperty}`} > {filterLabel} </label>
      <input type="checkbox" id={`filters__${filterProperty}`} name={`filters__${filterProperty}`} className={`filters__${filterProperty}`} value={filterProperty} onClick={filterBeers} />
    </>
  )
}

export default FilterItem
