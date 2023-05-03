function ExpenseDate(props) {
  // creation of all the data parts
  const month = props.newDate
    ? props.newDate.toLocaleString("it-IT", { month: "long" })
    : props.date.toLocaleString("it-IT", { month: "long" });
  const day = props.newDate
    ? props.newDate.toLocaleString("it-IT", { day: "2-digit" })
    : props.date.toLocaleString("it-IT", { day: "2-digit" });
  const year = props.newDate
    ? props.newDate.getFullYear()
    : props.date.getFullYear();
  return (
    <div id="date-box" className="col px-5 py-2">
      <div className="border border-4 border-light py-1 rounded rounded-2">
        <p className="mb-0">{month}</p>
        <p className="mb-0">{day}</p>
        <p className="mb-0">{year}</p>
      </div>
    </div>
  );
}

export default ExpenseDate;
