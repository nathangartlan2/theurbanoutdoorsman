import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import customStyles from "../../css/WriteBlog.module.css";

const StyledTitle = styled(TextField)(({ theme }) => ({
  "&": {
    width: "50%",
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
