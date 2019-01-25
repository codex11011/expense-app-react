import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./expenseForm";
import { removeExpense } from "../actions/expenses";
import { editExpense } from "../actions/expenses";

const EditExpense = props => {
  return (
    // <div>this is edit expense page with id : {props.match.params.id}</div>
    <div>
      <br />
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          // console.log("updated", expense);
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditExpense);
