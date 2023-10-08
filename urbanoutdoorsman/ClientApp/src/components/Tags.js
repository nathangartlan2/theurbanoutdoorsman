import React, { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import customStyles from "../css/WriteBlog.module.css";

const Tags = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const getTags = () => {
    return [
      "Backpacking",
      "Biking",
      "Bird Watching",
      "Camping",
      "Canoeing",
      "Fishing",
      "Hiking",
      "Horseback Riding",
      "Kayaking",
      "Mountain Climbing",
      "Picnicking",
      "Rafting",
      "Rock Climbing",
      "Skiing",
      "Snowboarding",
      "Trail Running",
    ];
  };

  const addTag = (tag) => {
    if (!tags.includes(tag) && tag !== "") {
      setTags((prevState) => [...prevState, tag]);
    }
  };

  return (
    <Autocomplete
      multiple
      className={customStyles.TaggedActivities}
      id="tags-standard"
      options={getTags()}
      getOptionLabel={(option) => option}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Select Activities at this location"
          placeholder="Tags"
        />
      )}
    />
  );
};

export default Tags;
