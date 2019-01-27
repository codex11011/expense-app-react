import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
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
        amount:{numeral(amount).format("$0,0.00")}
        <br />
        createdAt:{moment(createdAt).format("MMMM Do, YYYY")}
      </p>
    </li>
  );
};

export default connect()(ExpenseListItem);
