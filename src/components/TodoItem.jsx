import { Delete } from "@mui/icons-material";
import { Box, Button, Checkbox, IconButton, ListItem, ListItemButton, ListItemText } from "@mui/material";

const TodoItem = (props) => {
  const {
    todoId,
    todoName,
    onDelete,
    onToggle,
    checked
} = props;
  return (
    <>
      {/* <ListItemButton component="a" href="#simple-list">
        <ListItemText primary={item.todo} />
      </ListItemButton> */}
      <Button onClick={onDelete}>
        <IconButton>
          <Delete />
        </IconButton>
      </Button>
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

      {/* <List dense={dense}>
        {generate(
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Single-line item" secondary={secondary ? "Secondary text" : null} />
          </ListItem>
        )}
      </List> */}
    </>
  );
};
export default TodoItem;
