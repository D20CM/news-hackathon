import styles from "./menuitems.module.css";

export default function MenuItems({ show, setShow, category, setCategory }) {
  if (show === true) {
    return (
      <ul className={styles.show}>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
            setCategory("business");
          }}
        >
          Business
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
            setCategory("entertainment");
          }}
        >
          Entertainment
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
            setCategory("environment");
          }}
        >
          Environment
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
            setCategory("food");
          }}
        >
          Food
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
            setCategory("health");
          }}
        >
          Health
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
            setCategory("politics");
          }}
        >
          Politics
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
            setCategory("science");
          }}
        >
          Science
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
            setCategory("sports");
          }}
        >
          Sports
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
            setCategory("technology");
          }}
        >
          Technology
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
            setCategory("top");
          }}
        >
          Top
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
            setCategory("world");
          }}
        >
          World
        </li>
      </ul>
    );
  }

  if (show === false) {
    return <ul className={styles.hide}></ul>;
  }
}
