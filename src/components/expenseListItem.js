import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => {
  //   let  = props.expense;
  return (
    <li>
      <Link to={`/edit/${id}`}>
        <h4>{description}</h4>
      </Link>
      <p>
        note:{note}
        <br />
        amount:${amount}
        <br />
        createdAt:{createdAt}
      </p>
    </li>
  );
};

export default connect()(ExpenseListItem);
