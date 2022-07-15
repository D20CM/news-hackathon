import React from "react";
import styles from "./article.module.css";

function Article({ article }) {
  return (
    <div className={styles.articleCard}>
      {article.image_url !== null && (
        <img
          src={article.image_url}
          alt={article.title}
          className={styles.articleImage}
        ></img>
      )}
      <h2>{article.title}</h2>
      <p className={styles.content}>{article.content}</p>
      <a href={article.link} className={styles.readMore}>
        Read More
      </a>
    </div>
  );
}

export default Article;
