import React, { useState } from "react";
import styles from "../css/PostPreview.module.css";

const FullPost = (blogPost) => {
  return (
    <div>
      <div>
        <h1>{blogPost.title}</h1>
        <h5>{blogPost.author}</h5>
        <p>{blogPost.text}</p>
      </div>
    </div>
  );
};

export default FullPost;
