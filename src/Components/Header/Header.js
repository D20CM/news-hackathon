import styles from "./header.module.css";
import SideMenu from "../SideMenu/sideMenu";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>News App</div>
      <SideMenu />
    </div>
  );
}
