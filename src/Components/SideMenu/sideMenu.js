import Darkmode from "../Darkmode/Darkmode";
import Menu from "../Menu/Menu";
import styles from "./sideMenu.module.css";

export default function SideMenu() {
  return (
    <div className={styles.sidemenu}>
      <Darkmode />
      <Menu />
    </div>
  );
}
