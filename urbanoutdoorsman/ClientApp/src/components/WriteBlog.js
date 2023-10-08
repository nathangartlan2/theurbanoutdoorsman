import React, { useState, useEffect } from "react";
import Tags from "./Tags";
import StyledButton from "./StyledButton";
import customStyles from "../css/WriteBlog.module.css";
import { alpha, styled } from "@mui/material/styles";
import TitleInput from "./TitleInput";
import ImageUpload from "./ImageUpload";
import LocationPicker from "./LocationPicker";

const WriteBlog = () => {
  const [previewing, setPreviewing] = useState(false);
  const [location, setLocation] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [images, setImages] = useState([]);

  const [tags, setTags] = useState([]);

  const inputView = (
    <div className={customStyles.BlogInput}>
      <form className={customStyles.Form}>
        <TitleInput blogTitle={blogTitle} setBlogTitle={setBlogTitle} />
        <LocationPicker />
        <Tags />

        <textArea
          className={customStyles.TextInput}
          spellCheck="true"
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
          type="text"
        ></textArea>
      </form>
      <ImageUpload images={images} setImages={setImages} />
    </div>
  );

  const previewView = (
    <div>
      <h1>{blogTitle}</h1>
      <h2>{location}</h2>
      <p>{blogContent}</p>
    </div>
  );

  const sumbitPost = async () => {
    const data = {
      Title: blogTitle,
      Text: blogContent,
      Location: location,
      Tags: ["Camping", "Hiking"],
    };

    const response = await fetch("blogpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      alert(JSON.stringify(jsonResponse)); // Convert the JSON response to a string and display it
    } else {
      alert("Error: " + response.status);
    }
  };

  const submitButton = <StyledButton text="Submit Post" onClick={sumbitPost} />;

  return (
    <div>
      {previewing ? previewView : inputView}
      <StyledButton
        text={previewing ? "Edit" : "Preview Your Post"}
        onClick={() => setPreviewing(!previewing)}
      />
      {previewing ? submitButton : <></>}
    </div>
  );
};

export default WriteBlog;
