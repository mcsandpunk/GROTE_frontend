import { Box, Button, Input } from "@mui/material";
import React from "react";

const ProductInput = ({ onCreate }) => {
  const [product, setProduct] = React.useState("");
  const [department, setDepartment] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product) return alert("Please add a Product");

    if (!department) return alert("Please add a Department");

    onCreate({product, department});

    setProduct("");
    setDepartment("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column">
        <Input
          type="text"
          placeholder="Create Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <Button onClick={handleSubmit}>Create</Button>
    </Box>
      </form>
  );
};
export default ProductInput;
