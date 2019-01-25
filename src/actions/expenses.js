import uuid from "uuid";

// Action generators

// Add_Expense
export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "Add_Expense",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

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
