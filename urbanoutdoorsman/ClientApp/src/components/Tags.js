import React, { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import StyledButton from "./StyledButton";

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
    <div>
      <Autocomplete
        value={""}
        onChange={(e, newValue) => {
          addTag(newValue);
          setInputValue("");
        }}
        disablePortal
        id="tag-autocomplete"
        options={getTags()}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Tags" />}
      />
      <ul>
        {tags.map((tag) => {
          return (
            <li>
              <div>
                <p>{tag}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tags;