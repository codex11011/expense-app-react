import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./expenseForm";
import { startRemoveExpense } from "../actions/expenses";
import { startEditExpense } from "../actions/expenses";

export class EditExpense extends React.Component {
  onSubmit = expense => {
    // console.log("updated", expense);
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push("/");
  };

  render() {
    return (
      // <div>this is edit expense page with id : {props.match.params.id}</div>
      <div>
        <br />
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: data => dispatch(startRemoveExpense(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpense);
