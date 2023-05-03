import { useState } from "react";
import ExpenseItemsWrapper from "./components/ExpenseItemsWrapper";
import NewExpense from "./components/NewExpense";
import ExpenseChart from "./components/ExpenseChart";

const expenses = [
  {
    id: 1,
    title: "monthly shopping",
    amount: 290,
    date: new Date(2021, 0, 28),
  },
  {
    id: 2,
    title: "Hause rent",
    amount: 450,
    date: new Date(2023, 2, 28),
  },
  {
    id: 3,
    title: "Dog's food",
    amount: 100,
    date: new Date(2009, 4, 14),
  },
  {
    id: 4,
    title: "car Insurance",
    amount: 300.45,
    date: new Date(2021, 8, 13),
  },
];

function App() {
  const [currentExpensesList, setCurrentExpensesList] = useState(expenses);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of filteredExpenses) {
    const expenseMonth = new Date(expense.date).getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  const saveNewestExpenseHandler = (newestExpenseFromNewExpense) => {
    setCurrentExpensesList((previusList) => {
      return [newestExpenseFromNewExpense, ...previusList];
    });
  };

  const saveNewestindexHandelr = (indexFromWrapper) => {
    const objectToRemove = expenses.findIndex(
      (expense) => expense.id === indexFromWrapper
    );

    if (objectToRemove > -1) {
      expenses.splice(objectToRemove, 1);
    }

    setCurrentExpensesList([...expenses]);
  };

  const saveFilteredExpenses = (newestFilteredExpenseFromExpenseWrapper) => {
    setFilteredExpenses(newestFilteredExpenseFromExpenseWrapper);
  };

  return (
    <div className="App">
      <h1 className="text-center">Let's get started</h1>
      <ExpenseItemsWrapper
        onSaveIndex={saveNewestindexHandelr}
        onSaveFilteredList={saveFilteredExpenses}
        expenses={currentExpensesList}
      />
      <ExpenseChart datas={chartDataPoints}></ExpenseChart>
      <NewExpense onSaveNewestExpense={saveNewestExpenseHandler} />
    </div>
  );
}

export default App;
