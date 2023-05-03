import React, { useState } from "react";
function ExpenseForm(props) {
  // global inputs state management
  const [inputsChanged, setInputChanged] = useState({
    title: "",
    date: "",
    amount: "",
    id: null,
  });

  // this state check the input value of the data due to the different format needed YYYY-mm-dd and beacuse in the date displayed
  // i need the isoFormat
  const [defaultDataInputValue, setDefaultDataInputValue] = useState("");

  const [generatedId, setGeneratedId] = useState(5);

  const [warningMessages, setWarningMessages] = useState({
    emptyFields: "",
    emptyData: "",
    emptyTitle: "",
    emptyAmount: "",
  });

  // flag that manage the displying of the form
  const [formFlag, setFormFlag] = useState(false);

  //  state managenment of new entered expense
  //   const [enteredExpense, setEnteredExpense] = useState("");
  const expenseChangeHandler = (e) => {
    // metodo singolo input
    // setEnteredExpense(e.target.value);

    // metodo globale per cambiare gli input copiando l'oggetto e sosvrascivendo allavoce assegnata
    setInputChanged(
      //   {
      //   ...inputsChanged,
      //   enteredExpense: e.target.value,
      // }
      // metodo sempre globale per cambiare input ma che mette in coda il comando facendolo svolgere per ultimo non creando conflitti
      (previusInputState) => {
        // previusState è un parametro della funzione di update che staimo modificando e che equivarrà ad inputsChanged
        return { ...previusInputState, title: e.target.value };
      }
    );
  };

  //   const [enteredDate, setEnteredDate] = useState('');
  const dateChangeHandler = (e) => {
    setDefaultDataInputValue(e.target.value);

    // metodo singolo input
    // setEnteredDate(e.target.value);

    // metodo globale per cambiare gli input copiando l'oggetto e sosvrascivendo allavoce assegnata
    setInputChanged({
      ...inputsChanged,
      date: new Date(e.target.value),
    });
    // console.log(format(new Date(e.target.value), "yyyy-MM-dd"));
    // console.log(typeof format(new Date(e.target.value), "y"));
  };

  //   const [enteredAmount, setEnteredAmount] = useState('');
  const amountChangeHandler = (e) => {
    // metodo singolo input
    // setEnteredAmount(e.target.value);

    // metodo globale per cambiare gli input copiando l'oggetto e sosvrascivendo allavoce assegnata
    setInputChanged({
      ...inputsChanged,
      amount: e.target.value,
    });
  };

  // function that collect all the last change of the values of the form
  const formSubmittingHandler = (e) => {
    e.preventDefault();
    if (inputsChanged.amount && inputsChanged.date && inputsChanged.title) {
      // genero un id per ogni nuovo elemento creato
      setGeneratedId((id) => id + 1);
      let newExpense = { ...inputsChanged, id: generatedId };
      // avendo preparato nel componente padre NewExpense la prop onSaveNewExpense la richiamiamo e assegnamo il dato creato
      // in modo da poterlo passare al padre assegnadolo come parametro alla funzione onSaveNewExpense che però si rifarà alla
      // funzione saveNewExpenseHandler che è assegnata a onSaveNewExpense e che si preoccupa di saòvare materialmente il dato nel padre
      // quindi onSaveNewExpense è una prop che richiama la funzione saveNewExpenseHandler che fa il lavoro sporco di prendere isicamnete il
      // dato del figlio e portarlo nel padre
      props.onSaveNewExpense(newExpense);
      // reset dei valori negli input e anche in inputsChanged
      setInputChanged({
        title: "",
        date: "",
        amount: "",
      });

      setDefaultDataInputValue("");

      hideForm();

      setWarningMessages((previusMessage) => {
        return { ...previusMessage, emptyFields: "" };
      });
    } else {
      setWarningMessages((previusMessage) => {
        return {
          ...previusMessage,
          emptyFields: "All the fields must be filled",
        };
      });
    }
  };

  // function that shows the form
  const showForm = () => {
    setFormFlag(true);
  };

  const hideForm = () => {
    setFormFlag(false);
  };

  // when you click this button the form will show off
  if (!formFlag) {
    return (
      <div className="mb-2 text-center">
        <button onClick={showForm} className="btn btn-outline-light">
          Add
        </button>
      </div>
    );
  } else {
    return (
      <form onSubmit={formSubmittingHandler}>
        <p>{warningMessages.emptyFields}</p>
        <div className="mb-3">
          <label htmlFor="newDate" className="form-label">
            Add a new date
          </label>
          <input
            type="date"
            className="form-control "
            id="newDate"
            name="newDate"
            onChange={dateChangeHandler}
            value={defaultDataInputValue}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newExpense" className="form-label">
            Add a new expense
          </label>
          <input
            type="text"
            className="form-control "
            id="newExpense"
            name="newExpense"
            onChange={expenseChangeHandler}
            value={inputsChanged.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newAmount" className="form-label">
            Add a new amount
          </label>
          <input
            type="number"
            className="form-control "
            id="newAmount"
            name="newAmount"
            onChange={amountChangeHandler}
            value={inputsChanged.amount}
          />
        </div>
        <div className="mb-3 text-end">
          <button onClick={hideForm} className="me-2 btn btn-outline-light">
            Cancel
          </button>
          <button className="btn btn-outline-light">Add</button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
