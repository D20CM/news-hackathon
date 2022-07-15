import Darkmode from "../Darkmode/Darkmode";
import Menu from "../Menu/Menu";
import styles from "./sideMenu.module.css";

export default function SideMenu({ dark, setDark, category, setCategory }) {
  return (
    <div className={styles.sidemenu}>
      <Darkmode dark={dark} setDark={setDark} />
      <Menu category={category} setCategory={setCategory} />
    </div>
  );
}
