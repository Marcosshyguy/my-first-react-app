import React, { useState } from "react";
import ExpenseChartBar from "./ExpenseChartBar";
function ExpenseChart(props) {
  const datePointValues = props.datas.map((data) => data.value); //ritorna array di numeri
  const totalMaximum = Math.max(...datePointValues);

  return (
    <div className="chart container mb-2">
      {props.datas.map((data) => (
        <ExpenseChartBar
          key={data.label} //o ID
          value={data.value}
          maxValue={totalMaximum}
          label={data.label}
        ></ExpenseChartBar>
      ))}
    </div>
  );
}

export default ExpenseChart;
