import styles from "./header.module.css";
import Menu from "../Menu/Menu";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>News App</div>
      <Menu />
    </div>
  );
}
