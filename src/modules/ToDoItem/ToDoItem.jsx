import React from "react";
import { Box, Input, Button } from "@mui/joy";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../redux/actions";

import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ClearIcon from '@mui/icons-material/Clear';

function ToDoItem({ item, index }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(index));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(index));
  };

  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "6px",
        marginBottom: "5px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {item.completed ? (
        <DoneAllIcon sx={{ cursor: "pointer",color:"#2EC4B6" }} onClick={handleToggle} />
      ) : (
        <DoneIcon sx={{ cursor: "pointer",color:"grey" }} onClick={handleToggle} />
      )}
      <Input
        sx={{ flexGrow: 1, margin: "4px" }}
        value={item.content}
        readOnly
      />
      <ClearIcon sx={{ cursor: "pointer",color:"#FF3366" }} onClick={handleRemove}/>
    </Box>
  );
}

export default ToDoItem;
