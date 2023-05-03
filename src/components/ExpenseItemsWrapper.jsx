import React, { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import FilterExpense from "./FilterExpense";

function ExpenseItemsWrapper(props) {
  const [yearValue, setYearValue] = useState("");
  const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);

  const saveNewYear = (yearSelectedFromFilterExpense) => {
    setYearValue(yearSelectedFromFilterExpense);
  };

  const saveExpenseIndex = (expenseIndexFromExepnseItem) => {
    props.onSaveIndex(expenseIndexFromExepnseItem);
  };

  // set a variable that is used to display the expenses filtered or not
  useEffect(() => {
    if (yearValue === "") {
      setFilteredExpenses(props.expenses);
    } else {
      setFilteredExpenses(
        props.expenses.filter((expense) => {
          return expense.date.getFullYear().toString() === yearValue;
        })
      );
    }
  }, [yearValue, props.expenses]);

  useEffect(() => {
    props.onSaveFilteredList(filteredExpenses);
  }, [filteredExpenses, props.onSaveFilteredList]);

  return (
    <div>
      <div className="container text-light bg-success bg-gradient rounded rounded-2 mb-2 py-1">
        <FilterExpense selected={yearValue} onSaveNewYear={saveNewYear} />
        <h2>Your Expenses</h2>
        {/* cicling expense date according to the expenses number and check if the filteredExpenses is empty with &&*/}
        {filteredExpenses.length < 0 && <p>No record found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              onSaveIndexToDelete={saveExpenseIndex}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              id={expense.id}
              key={expense.id}
            />
          ))}
      </div>
    </div>
  );
}

export default ExpenseItemsWrapper;
