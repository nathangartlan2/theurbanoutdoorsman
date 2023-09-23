import React from "react";
import styles from "../css/PostPreview.module.css";

const PostPreview = ({ id, title, author, text, image }) => {
  const TEXT_PREVIEW_LENGTH = 40;

  const appendText = (text) => {
    const arrayOfWords = text.split(" ");
    let sliceArray = arrayOfWords.slice(0, TEXT_PREVIEW_LENGTH);

    let sliced = "";
    sliceArray.forEach(function(element, index, array) {
      sliced += `${element} `;
    });

    //remove trailing space on end
    sliced = sliced.slice(0, -1);

    sliced += "...";
    return sliced;
  };

  return (
    <div className={styles.component}>
      <div className={styles.postCopy}>
        <h1>{title}</h1>
        <h5>{author}</h5>
        <body>{appendText(text)}</body>
      </div>
      <img className={styles.img} src={image}></img>
    </div>
  );
};

export default PostPreview;
