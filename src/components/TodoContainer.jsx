import React from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { Box, Button, Checkbox, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Delete } from "@mui/icons-material";

const TodoContainer = () => {
  const [todoItems, setTodoItems] = React.useState([
    { id: 0, todo: "Mow the lawn", complete: false },
    { id: 1, todo: "Do Laundry", complete: false },
    { id: 2, todo: "Make Dinner", complete: false },
  ]);

  const [checked, setChecked] = React.useState([0]);

  const createTodoItem = (todo) => {
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

  const deleteTodoItem = (index) => {
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

  const ListItems = () =>
    todoItems.map((value, index) => (
      // <Box key={index} sx={{ display: "flex" }}>
        <TodoItem
          key={index}
          todoId={value.id}
          todoName={value.todo}
          onDelete={deleteTodoItem(index)}
          onToggle={handleToggle(value)}
          checked={checked.indexOf(value) !== -1}
        />
      //{/* </Box> */}
    ));

  return (
    <>
      <TodoInput createTodoItem={createTodoItem} />
      <List dense sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItems />
      </List>
    </>
  );
};

export default TodoContainer;
/*
 <Button onClick={() => deleteTodoItem(index)}>
              <IconButton>
                <Delete />
              </IconButton>
            </Button>
            <ListItem onClick={handleToggle(value)} key={value.id} secondaryAction={<Checkbox key={value.id} edge="start" checked={checked.indexOf(value) !== -1} />}>
              <ListItemButton>
                <ListItemText id={value.id} primary={value.todo} />
              </ListItemButton>
            </ListItem> */

//   return (
//     <Box>
//       <TodoInput createTodoItem={createTodoItem} />
//       {todoItems.map((item, index) => (
//         <TodoItem key={index} index={index} item={item} />
//         <TodoItem key={index} index={index} item={item} deleteTodoItem=
// {deleteTodoItem} />
//       ))}
//     </Box>
//   );
