import React from "react";
import FilterBox from "../../Component/FilterBox/FilterBox";
import SearchEventList from "../../Component/SearchEventList/SearchEventList";
import "./FilterEvents.css";
import { useState } from "react";

const FilterEvents = () => {
  const [monthYear, setMonthYear] = useState({
    selectedMonth: null,
    seletedYear: null,
  });

  const getMonthYear = (selectedMonth, selectedYear) => {
    console.log(selectedYear, selectedMonth);
    setMonthYear({ selectedYear, selectedMonth });
  };

  return (
    <div>
      <div className="find-events-wrapper">
        <FilterBox getMonthYear={getMonthYear} />
        <SearchEventList monthYear={monthYear} />
      </div>
    </div>
  );
};

export default FilterEvents;
