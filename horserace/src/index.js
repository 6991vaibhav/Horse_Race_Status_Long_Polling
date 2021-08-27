import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./assets/styles/App.css";
import App from "./components/App.js";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
