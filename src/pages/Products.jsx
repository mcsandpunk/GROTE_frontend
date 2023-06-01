import React from "react";
import ProductInput from "../components/ProductInput";
import ProductItem from "../components/ProductItem";
import { Divider, List, Paper } from "@mui/material";
import axios from "axios";
import BASE_URL from "../constants/url-base";
import moment from "moment/moment";

const TodoContainer = () => {
  const [products, setProducts] = React.useState([]);

  const handleOnCreate = async (product) => {
    const response = await axios.post(`${BASE_URL}/`, {
      name: product.product,
      department: product.department,
    });

    const newProduct = {
      department: response.data.department,
      id: response.data.id,
      product: response.data.name,
      note: "",
      solved: false,
    };
    const productsTemp = [...products];
    productsTemp.push(newProduct);

    setProducts(productsTemp);
  };

  const handleOnDelete = async (product, index) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${product.id}`);
      const newTodoItems = [...products];
      newTodoItems.splice(index, 1);
      setProducts(newTodoItems);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggle = async (product, index) => {
    try {
      if (!product.note) {
        alert("Agrega un comentario");
        return;
      }

      const newProducts = [...products];
      newProducts[index].complete = !product.complete;
      setProducts(newProducts);

      const response = await axios.put(`${BASE_URL}/${product.id}?note=${product.note}&solved=${product.complete}`, product);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const handleOnNoteChange = (e, index) => {
    const newProducts = [...products];
    newProducts[index].note = e;
    setProducts(newProducts);
  };

  const ProductListItems = () =>
    products.length > 0 &&
    products.map((product, index) => {
      return (
        <>
          <ProductItem
            key={product.id}
            productId={product.id}
            productName={product.product}
            checked={product.complete}
            productNote={product.note}
            noteCreateDate={product.admissionDate}
            department={product.department}
            onDelete={() => handleOnDelete(product, index)}
            onToggle={() => handleToggle(product, index)}
            onNoteChange={(e) => handleOnNoteChange(e, index)}
          />
          <Divider />
        </>
      );
    });

  const getProducts = async () => {
    try {
      const resultProducts = await axios.get(`${BASE_URL}`);
      const newProducts = resultProducts.data.map((product) => {
        return {
          id: product.id,
          product: product.name,
          note: product.note,
          department: product.department,
          complete: product.solved,
          admissionDate: moment(product.admissionDate).format("MMMM Do YYYY, h:mm:ss a"),
        };
      });

      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };

  // READ
  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <Paper sx={{ padding: "1rem", maxWidth: "25vw" }} elevation={1}>
      <ProductInput onCreate={handleOnCreate} />
      <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ProductListItems />
      </List>
    </Paper>
  );
};

export default TodoContainer;
