import React from "react";
import ProductInput from "../components/ProductInput";
import ProductItem from "../components/ProductItem";
import { Divider, List, Paper } from "@mui/material";

const TodoContainer = () => {
  const [todoItems, setTodoItems] = React.useState([
    { id: 0, product: "Product 1", department: "department 1", complete: false },
    { id: 1, product: "Product 2", department: "department 2", complete: false },
    { id: 2, product: "Product 3", department: "department 3", complete: false },
  ]);

  const [checked, setChecked] = React.useState([0]);

  const handleOnCreate = (product) => {
    const newTodoItems = [
      ...todoItems,
      {
        id: todoItems.length,
        product: product.product,
        department: product.department,
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

  const ProductListItems = () =>
    todoItems.map((value, index) => (
        <>
            <ProductItem
                key={index}
                productId={value.id}
                productName={value.product}
                department={value.department}
                onDelete={() => handleOnDelete(index)}
                onToggle={() => handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
            />
            <Divider />
        </>
    ));

  return (
    <Paper sx={{padding: '1rem', maxWidth: '25vw'}} elevation={1}>
      <ProductInput onCreate={handleOnCreate} />
      <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ProductListItems />
      </List>
    </Paper>
  );
};

export default TodoContainer;
