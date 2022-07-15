import styles from "./menu.module.css";

export default function MenuItems({ show, setShow }) {
  if (show === true) {
    return (
      <ul className={styles.show}>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
          }}
        >
          Business
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
          }}
        >
          Entertainment
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
          }}
        >
          Environment
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
          }}
        >
          Food
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
          }}
        >
          Health
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
          }}
        >
          Politics
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
          }}
        >
          Science
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
          }}
        >
          Sports
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
          }}
        >
          Technology
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
          }}
        >
          Top
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setShow(false);
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
