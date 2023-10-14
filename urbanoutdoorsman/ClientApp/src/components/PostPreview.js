import React from "react";
import styles from "../css/PostPreview.module.css";
import { Link } from "react-router-dom";

const PostPreview = ({ id, title, author, text, image, onClick }) => {
  const TEXT_PREVIEW_LENGTH = 30;

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
    <Link to={`/blogs/${id}`} relative={"path"}>
      <div className={styles.component} onClick={() => onClick(id)}>
        <div className={styles.postCopy}>
          <h1>{title}</h1>
          <h5>{author}</h5>
          <p className="appendedText">{appendText(text)}</p>
        </div>
        <img className={styles.img} src={image}></img>
      </div>
    </Link>
  );
};

export default PostPreview;
