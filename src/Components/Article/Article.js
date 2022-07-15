import React from "react";
import styles from "./article.module.css";
// import placeholder from "../../../public/assets/news-placeholder.png";

function Article({ article }) {
  const placeholder =
    "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png";
  return (
    <div className={styles.articleCard}>
      {article.image_url !== null ? (
        <img
          src={article.image_url}
          alt={article.title}
          className={styles.articleImage}
        ></img>
      ) : (
        <img
          src={placeholder}
          alt="placeholder"
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
