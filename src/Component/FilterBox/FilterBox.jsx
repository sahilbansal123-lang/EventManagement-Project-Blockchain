import React from "react";
import "./FilterBox.css";
import { dataRender, months, years } from "../../utils/dataRender";

const FilterBox = () => {
  const monthToDisplay = () => {
    return dataRender(months);
  };

  const YearsToDisplay = () => {
    return dataRender(years);
  };

  return (
    <div>
      <form>
        <label htmlFor="month">Month : </label>
        <select name="" id="">
          {monthToDisplay()}
        </select>
        <label htmlFor="year">Year : </label>
        <select name="" id="">
          {YearsToDisplay()}
        </select>
      </form>
    </div>
  );
};

export default FilterBox;
