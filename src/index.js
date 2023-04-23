import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js"
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import About from './pages/About.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
    <Routes>
      <Route path="/" />
      <Route path="/about" />
    </Routes>
  </HashRouter>
);