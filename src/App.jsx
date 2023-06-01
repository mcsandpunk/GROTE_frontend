import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import TodoContainer from "./pages/TodoContainer";
import Login from "./pages/login";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<TodoContainer />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
