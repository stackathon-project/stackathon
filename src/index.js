import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
/* Import and destructure main from src/component/index.js 
and anything else you may need here */

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
