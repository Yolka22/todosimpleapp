import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo, updateTodo } from "../../redux/actions";

import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import { Box, Input, Button } from "@mui/joy";

import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import CancelIcon from "@mui/icons-material/Cancel";

function ToDoItem({ item, index }) {
  const dispatch = useDispatch();
  const [content, setContent] = useState(item.content);
  const [edit, setEdit] = useState(false);
  const handleRemove = () => {
    dispatch(removeTodo(index));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(index));
  };

  const handleEditToggle = () => {
    setEdit(!edit);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const updateItem = () => {
    dispatch(updateTodo(index, content));
  };

  const cancelHandler = () => {
    setContent(item.content);
    setEdit(false)
  };

  return (
    <ClickAwayListener onClickAway={cancelHandler}>
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
        <DoneAllIcon
          sx={{ cursor: "pointer", color: "#2EC4B6" }}
          onClick={handleToggle}
        />
      ) : (
        <DoneIcon
          sx={{ cursor: "pointer", color: "grey" }}
          onClick={handleToggle}
        />
      )}

      <Input
        sx={{ flexGrow: 1, margin: "4px" }}
        value={content}
        disabled={!edit}
        onChange={handleContentChange}
      />

      <Button
        sx={{ cursor: "pointer", color: "#FF3366" }}
        onClick={handleEditToggle}
      >
        {edit ? (
          <>
            <BeenhereIcon onClick={updateItem} />
            <CancelIcon onClick={cancelHandler} sx={{ marginLeft: 1 }} />
          </>
        ) : (
          <EditIcon />
        )}
      </Button>
      <ClearIcon
        sx={{ cursor: "pointer", color: "#FF3366" }}
        onClick={handleRemove}
      />
    </Box>
    </ClickAwayListener>
  );
}

export default ToDoItem;
