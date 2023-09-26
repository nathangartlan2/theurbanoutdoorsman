import React, { useState, useEffect } from "react";
import styles from "../css/PostPreview.module.css";

const FullBlog = ({ blog }) => {
  return (
    <div className={styles.component}>
      <div className={styles.postCopy}>
        <h1>{blog.title}</h1>
        <h5>{blog.author}</h5>
        <p>{blog.text}</p>
      </div>
    </div>
  );
};

export default FullBlog;
