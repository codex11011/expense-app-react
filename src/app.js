import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
// import { addExpense } from "./actions/expenses";
// import { editExpense } from "./actions/expenses";
// import { removeExpense } from "./actions/expenses";
// import { setTextFilter } from "./actions/filters";
// import { sortByDate } from "./actions/filters";
// import { sortByAmount } from "./actions/filters";
// import { setStartDate } from "./actions/filters";
// import { setEndDate } from "./actions/filters";
// import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "./firebase/firebase";

const store = configureStore();

// store.subscribe(() => {});

// store.dispatch(
//   addExpense({
//     description: "water bill",
//     note: "semester end",
//     amount: 3000,
//     createdAt: 1548352979923
//   })
// );

// store.dispatch(
//   addExpense({
//     description: "gas bill",
//     note: "semester end",
//     amount: 5000,
//     createdAt: 1548352979923
//   })
// );

// store.dispatch(
//   addExpense({
//     description: "Electricity bill",
//     note: "semester end",
//     amount: 1500,
//     createdAt: 1548352979923
//   })
// );

// store.dispatch(setTextFilter("bill"));

// const state_v = store.getState();
// const visibleExpenses = getVisibleExpenses(state_v.expenses, state_v.filters);
// console.log(visibleExpenses);
// console.log("test");
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
