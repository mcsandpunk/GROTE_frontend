import { Delete } from "@mui/icons-material";
import { Box, Button, Checkbox, IconButton, ListItem, ListItemButton, ListItemText } from "@mui/material";

const TodoItem = (props) => {
  const { todoId, todoName, onDelete, onToggle, checked } = props;
  return (
    <Box sx={{ display: "flex" }}>
      <ListItem
        onClick={onToggle}
        key={todoId}
        secondaryAction={
          <Checkbox
            key={todoId}
            edge="start"
            checked={checked}
          />
        }
      >
        <ListItemButton>
          <ListItemText id={todoId} primary={todoName} />
        </ListItemButton>
      </ListItem>
      <Button onClick={onDelete}>
        <IconButton>
          <Delete />
        </IconButton>
      </Button>
    </Box>
  );
};
export default TodoItem;
