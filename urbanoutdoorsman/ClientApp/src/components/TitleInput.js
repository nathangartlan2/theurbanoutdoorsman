import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import customStyles from "../css/WriteBlog.module.css";

const StyledTitle = styled(TextField)(({ theme }) => ({
  "&": {
    width: "50%",
  },
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
}));

const TitleInput = ({ blogTitle, setBlogTitle }) => {
  return (
    <StyledTitle
      value={blogTitle}
      onChange={(e) => setBlogTitle(e.target.value)}
      id="standard-basic"
      label="Title"
      variant="standard"
    />
  );
};

export default TitleInput;
