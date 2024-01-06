import React from "react";
import FilterBox from "../../Component/FilterBox/FilterBox";
import SearchEventList from "../../Component/SearchEventList/SearchEventList";
import "./FilterEvents.css";

const FilterEvents = () => {
  return (
    <div>
      <h1>Filter Events</h1>
      <FilterBox />
      <SearchEventList />
    </div>
  );
};

export default FilterEvents;
