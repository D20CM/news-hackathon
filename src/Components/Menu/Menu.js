import styles from "./menu.module.css";
import image from "./2976215.png";
import MenuItems from "../../MenuItems/MenuItems";
import React from "react";
import { useState } from "react";

export default function Menu({ category, setCategory }) {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.menu} onClick={() => setShow(!show)}>
      <img className={styles.img} alt="menu" src={image}></img>
      <MenuItems
        show={show}
        setShow={setShow}
        category={category}
        setCategory={setCategory}
      />
    </div>
  );
}
