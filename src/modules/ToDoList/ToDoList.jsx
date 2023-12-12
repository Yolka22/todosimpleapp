import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";

import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Button, LinearProgress, Typography } from "@mui/joy";

import ToDoItem from "../ToDoItem/ToDoItem";

function ToDoList() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.ToDoListReducer.list);
  const completedCount = useSelector(
    (state) => state.ToDoListReducer.completedCount
  );
  const totalCount = list.length;
  const progress = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;

  const [sortingType, setSortingType] = useState("All");

  const FILTER_MAP = {
    All: () => true,
    Done: (item) => item.completed,
    ToDo: (item) => !item.completed,
  };

  const filteredList = list.filter(FILTER_MAP[sortingType]);

  const handleSorting = (type) => {
    setSortingType(type);
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        display: "flex",
        width: isMobile ? "100%" : "85%",
        margin: "auto",
        flexDirection: "column",
      }}
    >
      <Box sx={{ marginBottom: "10px" }}>
        {Object.keys(FILTER_MAP).map((type) => (
          <Button
            key={type}
            sx={{ marginRight: "5px" }}
            onClick={() => handleSorting(type)}
          >
            {type}
          </Button>
        ))}
      </Box>

      {filteredList.map((item, index) => (
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
      <Button
        sx={{ marginTop: "10px" }}
        onClick={() => dispatch(addTodo("content"))}
      >
        +
      </Button>
    </Box>
  );
}

export default ToDoList;
