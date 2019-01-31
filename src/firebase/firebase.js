import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import expenses from "../selectors/expenses";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// console.log("work");

// database.ref("expenses").push({
//   description: "Water bill",
//   note: "monthly payment",
//   amount: 109500,
//   createdAt: 645311351121
// });

// database.ref("expenses").push({
//   description: "Electricity bill",
//   note: "monthly payment",
//   amount: 1093400,
//   createdAt: 4355311351121
// });

// database.ref("expenses").push({
//   description: "Pizza bill",
//   note: "monthly payment",
//   amount: 10454600,
//   createdAt: 785311351121
// });

// const onValueChange = database.ref("location/city").on("value", snapshot => {
//   console.log(snapshot.val());
// }, (e)=>{ console.log("error->",e);});

// database.ref().off(onValueChange);

// database
//   .ref()
//   .set({
//     name: "Arya",
//     age: 21,
//     location: {
//       city: "jaipur",
//       country: "India"
//     }
//   })
//   .then(() => {
//     console.log("Data saved succesfully");
//   })
//   .catch(e => {
//     console.log("Error --->", e);
//   });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("data removed");
//   })
//   .catch(e => {
//     console.log("Error deleting data:", e);
//   });
//or database.ref().set(null)

// database
//   .ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//   })
//   .catch(e => {
//     console.log("Error ->", e);
//   });
