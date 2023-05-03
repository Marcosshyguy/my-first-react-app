import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  // fuzione che assegnamo ad a questo componente che serve a creare un dato con il dato ricavato nel suo componente figlio e portatrlo qua
  const saveNewExpenseHandler = (newExpenseFromExpenseForm) => {
    let newestExpense = { ...newExpenseFromExpenseForm };
    console.log(newestExpense);
    props.onSaveNewestExpense(newestExpense);
  };

  return (
    <div className="container text-light bg-primary bg-gradient rounded rounded-2 py-1">
      <h2>Add a new expense</h2>
      {/* assegnamo una props che prenderà la funzione qua sopra per funzionare
       perciò per andare nel compoente figlio dovremo richiamare on onSaveNewExpense ma nei parametri assegnargli
       ciò che si aspetta la funzione getNewExpense ovvero il dato ricavato nel figlio*/}
      <ExpenseForm onSaveNewExpense={saveNewExpenseHandler} />
    </div>
  );
}

export default NewExpense;
