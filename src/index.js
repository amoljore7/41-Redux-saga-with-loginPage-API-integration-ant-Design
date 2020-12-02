import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import App from "./App";
import { currentUser } from "./actions/auth/authActions";

if (localStorage.user) {
  const user = JSON.parse(localStorage.getItem("user"));
  store.dispatch(currentUser(user));
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
