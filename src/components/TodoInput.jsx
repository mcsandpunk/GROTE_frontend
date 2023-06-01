import { Button } from "@mui/material";
import React from "react";

const TodoInput = ({ createTodoItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return console.log("Please add something to-do");
    }
    createTodoItem(value);
    setValue("");
  };

  const [value, setValue] = React.useState("");
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Create
        todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={handleSubmit}>Create</Button>
    </form>
  );
};
export default TodoInput;
