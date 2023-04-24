import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js"
import { Route, Routes, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);