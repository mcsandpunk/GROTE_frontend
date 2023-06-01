import { Delete } from "@mui/icons-material";
import { Box, Button, Checkbox, IconButton, ListItem, ListItemButton, ListItemText, TextField } from "@mui/material";

const ProductItem = (props) => {
  const { productId, department, productName, onDelete, onToggle, checked } = props;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", paddingY: "1.5rem" }}>
      <Box sx={{ display: "flex" }}>
        <ListItem
          onClick={onToggle}
          key={productId}
          secondaryAction={
            <Checkbox
              key={productId}
              edge="start"
              checked={checked}
            />
          }
        >
          <Box width={"100%"}>
            <ListItemButton>
              <ListItemText id={productId} primary={productName} secondary={department} />
            </ListItemButton>
          </Box>
        </ListItem>
        <Button onClick={onDelete}>
          <IconButton>
            <Delete />
          </IconButton>
        </Button>
      </Box>
      <TextField
        placeholder="Comments"
        fullWidth
        multiline
        rows={1}
        maxRows={4}
      />
    </Box>
  );
};
export default ProductItem;
