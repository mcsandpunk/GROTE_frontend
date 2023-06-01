import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Products from "./pages/Products";
import Login from "./pages/login";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Products />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
