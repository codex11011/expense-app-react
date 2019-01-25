import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>chk-Expense</h1>

    <NavLink to="/" exact={true} activeClassName="isactive">
      Go Home
    </NavLink>

    <NavLink to="/edit/id" exact={true} activeClassName="isactive">
      Edit
    </NavLink>

    <NavLink to="/create" exact={true} activeClassName="isactive">
      Create Expense
    </NavLink>

    <NavLink to="/help" exact={true} activeClassName="isactive">
      Help
    </NavLink>
  </header>
);

export default Header;
