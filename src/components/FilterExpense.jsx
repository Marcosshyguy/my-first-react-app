import React, { useState } from "react";

const FilterExpense = (props) => {
  const takeValueSelectedHandler = (e) => {
    props.onSaveNewYear(e.target.value);
  };

  return (
    <div className="d-flex justify-content-between text-light mb-2 py-1">
      <h3>Filter by year</h3>
      <div>
        <select
          className="form-select"
          value={props.selected}
          onChange={takeValueSelectedHandler}
        >
          <option value="">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default FilterExpense;
