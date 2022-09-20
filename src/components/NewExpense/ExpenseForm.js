import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState(''); 
  const [enteredAmount, setEnteredAmount] = useState(''); 
  const [enteredDate, setEnteredDate] = useState(''); 

  /* 
  
  using one state instead might require that you create an 
  object that updates all three elements at the time like this

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  and then create a function such as an event handler

  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput
      enteredTitle: event.target.value,
    })
  }

  */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'> 
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler}></input>
        </div>
        <div className='new-expense__control'> 
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}></input>
        </div>
        <div className='new-expense__control'> 
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;