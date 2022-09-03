import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  // {
  //   id: "e1",
  //   title: "Toilet Paper",
  //   amount: 99.99,
  //   date: new Date(2020, 7, 14),
  // },
  // {
  //   id: "e2",
  //   title: "New TV",
  //   amount: 79999.99,
  //   date: new Date(2021, 2, 12),
  // },
  // {
  //   id: "e3",
  //   title: "Car Insurance",
  //   amount: 2499.99,
  //   date: new Date(2021, 2, 28),
  // },
  // {
  //   id: "e4",
  //   title: "New Desk (Wooden)",
  //   amount: 5000.00,
  //   date: new Date(2021, 5, 12),
  // },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return[expense, ...prevExpenses];
    });
    //used here is the function form of updating a variable if it is dependent on the previous state.
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
