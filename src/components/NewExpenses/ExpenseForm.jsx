import React, { useState } from "react";
import "../NewExpenses/ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(" ");
  const [enteredAmount, setEnteredAmount] = useState(" ");
  const [enteredDate, setEnteredDate] = useState(" ");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })

  const titleChantHandler = (event) => {
    // ___Method: Number of 1::

    setEnteredTitle(event.target.value);

    // ___Method: Number of 2::

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })

    // ___Method: Number of 3::

    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value}
    // })
  };
  const amountChangeHandler = (event) => {
    // ___Method: Number of 1::

    setEnteredAmount(event.target.value);

    // ___Method: Number of 2::

    // setUserInput({
    //   ...userInput,
    //   enterAmount: event.target.value,
    // });
    // ___Method: Number of 3::

    // setUserInput((prevState) => {
    //   return {...prevState, enteredAmount: event.target.value}
    // })
  };
  const dateChangeHandler = (event) => {
    // ___Method: Number of 1::

    setEnteredDate(event.target.value);

    // ___Method: Number of 2::

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // ___Method: Number of 3::

    // setUserInput((prevState) => {
    //   return {...prevState, enteredDate: event.target.value}
    // })
  };
  const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    props.onSaveExpenseData(expenseData)
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }
  return (
    <form action="" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label for="fname">Title</label>
          <input type="text" value={enteredTitle} onChange={titleChantHandler} />
        </div>
        <div className="new-expense__control">
          <label for="fname">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label for="fname">Date</label>
          <input
            type="date"
            min="2019-10-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
