import styles from "./articlesArea.module.css";

export default function ArticlesArea() {
  return (
    <div>
      <div className={styles.gridcontainer}>
        <div className={styles.grid} id={styles.grid1}>
          A
        </div>
        <div className={styles.grid} id={styles.grid2}>
          B
        </div>
        <div className={styles.grid} id={styles.grid3}>
          C
        </div>
        <div className={styles.grid} id={styles.grid4}>
          D
        </div>
        <div className={styles.grid} id={styles.grid5}>
          E
        </div>
        <div className={styles.grid} id={styles.grid6}>
          F
        </div>
        <div className={styles.grid} id={styles.grid7}>
          G
        </div>
        <div className={styles.grid} id={styles.grid8}>
          H
        </div>
        <div className={styles.grid} id={styles.grid9}>
          I
        </div>
        <div className={styles.grid} id={styles.grid10}>
          J
        </div>
      </div>
    </div>
  );
}
