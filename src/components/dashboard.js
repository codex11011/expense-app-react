import React from "react";
import ExpenseList from "../components/expenseList";
import ExpenseListFilters from "../components/expenseListFilters";

const ExpenseDashboard = () => (
  <div>
    <div>
      <p>Enter value:</p>
      <ExpenseListFilters />
    </div>
    <ExpenseList />
  </div>
);
export default ExpenseDashboard;
