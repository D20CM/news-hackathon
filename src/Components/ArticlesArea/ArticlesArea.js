import styles from "./articlesArea.module.css";
import Article from "../Article/Article";

export default function ArticlesArea() {
  return (
    <div>
      <div className={styles.gridcontainer}>
        <div className={styles.grid} id={styles.grid1}>
          <Article />
        </div>
        <div className={styles.grid} id={styles.grid2}>
          <Article />
        </div>
        <div className={styles.grid} id={styles.grid3}>
          <Article />
        </div>
        <div className={styles.grid} id={styles.grid4}>
          <Article />
        </div>
        <div className={styles.grid} id={styles.grid5}>
          <Article />
        </div>
        <div className={styles.grid} id={styles.grid6}>
          <Article />
        </div>
        <div className={styles.grid} id={styles.grid7}>
          <Article />
        </div>
        <div className={styles.grid} id={styles.grid8}>
          <Article />
        </div>
        <div className={styles.grid} id={styles.grid9}>
          <Article />
        </div>
        <div className={styles.grid} id={styles.grid10}>
          <Article />
        </div>
      </div>
    </div>
  );
}
