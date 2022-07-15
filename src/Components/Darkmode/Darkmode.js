import styles from "./darkmode.module.css";
import image from "./107753.png";

export default function Darkmode() {
  return (
    <div className={styles.darkmode}>
      <img className={styles.img} alt="dark mode" src={image}></img>
    </div>
  );
}
