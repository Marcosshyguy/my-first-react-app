import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Wrapper from "./Wrapper";
const ExpenseItem = (props) => {
  // const [expenses, setExpenses] = useState(props.expenses);

  const handleDeleteExpense = (index) => {
    console.log(index);
    props.onSaveIndexToDelete(index);
  };
  // const handleChangeDate = (index, newDate) => {
  //   // test con set timeout
  //   setTimeout(() => {
  //     // viene creato un nuovo oggetto
  //     const newExpenses = [...expenses];
  //     // a seconda dell'index incui ci troviamo nel ciclo map cambiamo la data
  //     newExpenses[index] = { ...newExpenses[index], date: newDate };
  //     // assegnamo il cambiamento di stato
  //     setExpenses(newExpenses);
  //     // tutto ciò avviene dopo 3 secondi del click del bottone
  //   }, 3000);
  // };

  return (
    <Wrapper>
      <ExpenseDate date={props.date} />
      <div className="col d-flex justify-content-center align-items-center">
        <p>{props.title}</p>
      </div>
      <div className="col d-flex justify-content-center align-items-center">
        <p>{props.amount} $</p>
      </div>
      <div className="col d-flex justify-content-center align-items-center">
        <button
          className="btn btn-outline-light"
          onClick={() => {
            handleDeleteExpense(props.id); // chiamare handleClick con l'indice dell'oggetto che si desidera modificare
          }}
        >
          Done
        </button>
      </div>
    </Wrapper>
  );
};

export default ExpenseItem;
