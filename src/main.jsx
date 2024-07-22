import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./User/redux/store.jsx";
import { Toaster } from "react-hot-toast";

// DONOT EDIT THIS FILE ONLY USE APP.JSX AND MUST FOLLOW THE CODE CUIDLELINES

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
      <Toaster />
    </Provider>
  </React.StrictMode>
);
