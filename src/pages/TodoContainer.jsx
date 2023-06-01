import React from "react";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";
import { List, Paper } from "@mui/material";

const TodoContainer = () => {
  const [todoItems, setTodoItems] = React.useState([
    { id: 0, todo: "Mow the lawn", complete: false },
    { id: 1, todo: "Do Laundry", complete: false },
    { id: 2, todo: "Make Dinner", complete: false },
  ]);

  const [checked, setChecked] = React.useState([0]);

  const handleOnCreate = (todo) => {
    const newTodoItems = [
      ...todoItems,
      {
        id: todoItems.length,
        todo,
        complete: false,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const handleOnDelete = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    currentIndex === -1 ? newChecked.push(value) : newChecked.splice(currentIndex, 1);

    setChecked(newChecked);
  };

  const TodoListItems = () =>
    todoItems.map((value, index) => (
      <TodoItem
        key={index}
        todoId={value.id}
        todoName={value.todo}
        onDelete={() => handleOnDelete(index)}
        onToggle={() => handleToggle(value)}
        checked={checked.indexOf(value) !== -1}
      />
    ));

  return (
    <Paper sx={{padding: '1rem', maxWidth: '25vw'}} elevation={1}>
      <TodoInput createTodoItem={handleOnCreate} />
      <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
        <TodoListItems />
      </List>
    </Paper>
  );
};

export default TodoContainer;
