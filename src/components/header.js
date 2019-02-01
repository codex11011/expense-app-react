import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

const Header = ({ startLogout }) => (
  <header>
    <h1>chk-Expense</h1>

    <NavLink to="/dashboard" activeClassName="isactive">
      DashBoard
    </NavLink>
    <NavLink to="/create" exact={true} activeClassName="isactive">
      Create Expense
    </NavLink>

    <NavLink to="/help" exact={true} activeClassName="isactive">
      Help
    </NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => {
    dispatch(startLogout());
  }
});
export default connect(
  undefined,
  mapDispatchToProps
)(Header);
