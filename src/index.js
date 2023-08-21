import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store.js";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </React.StrictMode>
);
