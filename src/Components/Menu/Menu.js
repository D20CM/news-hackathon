import styles from "./menu.module.css";
import image from "./2976215.png";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <img className={styles.img} alt="menu" src={image}></img>
    </div>
  );
}
