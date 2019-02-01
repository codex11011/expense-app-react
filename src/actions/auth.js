import { firebase, googleAuthProvider } from "../firebase/firebase";

export const login = uid => ({
  type: "Login",
  uid
});
export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: "Logout"
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
