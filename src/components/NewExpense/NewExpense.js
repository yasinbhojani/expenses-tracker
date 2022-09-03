import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  // This state manages whether the form will be visible or not
  const [formVisibility, setFormVisibility] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setFormVisibility(false);
  };

  const startEditingHandler = () => {
    setFormVisibility(true);
  };

  const stopEditingHandler = () => {
    setFormVisibility(false);
  };

  return (
    <div className="new-expense">
      {formVisibility === false && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {formVisibility === true && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
