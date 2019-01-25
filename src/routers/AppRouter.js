import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/header";
import ExpenseDashboard from "../components/dashboard";
import AddExpense from "../components/createExpense";
import EditExpense from "../components/editExpense";
import Help from "../components/help";
import NotFound from "../components/notFound";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Route component={Header} />
      <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
