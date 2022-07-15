import styles from "./header.module.css";
import SideMenu from "../SideMenu/sideMenu";

export default function Header({ dark, setDark, category, setCategory }) {
  return (
    <div className={styles.header}>
      <div className={styles.title}>News App</div>
      <SideMenu
        dark={dark}
        setDark={setDark}
        category={category}
        setCategory={setCategory}
      />
    </div>
  );
}
