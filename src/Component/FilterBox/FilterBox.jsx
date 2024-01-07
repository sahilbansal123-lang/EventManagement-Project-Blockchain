import React from "react";
import { useState, useEffect } from "react";
import "./FilterBox.css";
import { dataRender, months, years } from "../../utils/dataRender";

const FilterBox = ({ getMonthYear }) => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState(2024);

  const monthToDisplay = () => {
    return dataRender(months);
  };

  const YearsToDisplay = () => {
    return dataRender(years);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(Number(e.target.value));
  };

  const updateParent = () => {
    getMonthYear(selectedMonth, selectedYear);
  };

  const submitEventInfo = (e) => {
    e.preventDefault();
    updateParent();
  };

  useEffect(() => {
    updateParent();
  }, []);

  return (
    <div>
      <form className="filter-card" onSubmit={submitEventInfo}>
        <div className="wrapper">
          <div className="date">
            <label htmlFor="month">Month : </label>
            <select value={selectedMonth} onChange={handleMonthChange}>
              {monthToDisplay()}
            </select>
          </div>
          <div className="date">
            <label htmlFor="year">Year : </label>
            <select value={selectedYear} onChange={handleYearChange}>
              {YearsToDisplay()}
            </select>
          </div>
        </div>
        <button type="submit">Find Events</button>
      </form>
    </div>
  );
};

export default FilterBox;
