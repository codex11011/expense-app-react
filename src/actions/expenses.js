import uuid from "uuid";
import database from "../firebase/firebase";
// compomnent calls action generator
// action generator return function
// component dispatches function
// redux store changes

// Action generators

// Add_Expense
export const addExpense = expense => ({
  type: "Add_Expense",
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    database
      .ref("expenses")
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

// Remove_Expense
export const removeExpense = ({ id }) => ({
  type: "Remove_Expense",
  id
});

// Edit_Expense
export const editExpense = (id, updates) => ({
  type: "Edit_Expense",
  id,
  updates
});
