import styles from "./articlesArea.module.css";
import Article from "../Article/Article";

export default function ArticlesArea({ articles }) {
  return (
    <div>
      <div className={styles.gridcontainer}>
        {articles?.map((article, index) => (
          <Article article={article} key={index} className={styles.grid} />
        ))}
      </div>
    </div>
  );
}
