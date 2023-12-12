import { Box, Button, LinearProgress, Typography } from "@mui/joy";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDoItem from "../ToDoItem/ToDoItem";
import { addTodo } from "../../redux/actions";

function ToDoList() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.ToDoListReducer.list);
  const completedCount = useSelector(
    (state) => state.ToDoListReducer.completedCount
  );
  const totalCount = list.length;

  const progress = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;

  return (
    <Box
      sx={{
        justifyContent: "center",
        display: "flex",
        width: "80%",
        margin: "auto",
        flexDirection: "column",
      }}
    >
      {list.map((item, index) => (
        <ToDoItem key={index} index={index} item={item} />
      ))}
      <LinearProgress
        determinate
        variant="outlined"
        size="sm"
        thickness={32}
        value={progress}
        sx={{
          color: "#F6F7F8",
          "--LinearProgress-radius": "0px",
          "--LinearProgress-progressThickness": "24px",
          boxShadow: "sm",
          borderColor: "neutral.500",
        }}
      >
        <Typography
          level="body-xs"
          fontWeight="xl"
          textColor="common.white"
          sx={{ mixBlendMode: "difference" }}
        >
          DONE... {`${Math.round(progress)}%`}
        </Typography>
      </LinearProgress>
      <Button sx={{marginTop:"10px"}} onClick={() => dispatch(addTodo("content"))}>+</Button>
    </Box>
  );
}

export default ToDoList;
