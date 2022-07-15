import { React, useState } from "react";
import styles from "./searchbar.module.css";

function SearchBar({ searchTerm, setSearchTerm }) {
  const [userInput, setUserInput] = useState("");

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleSubmit() {
    setSearchTerm(userInput);
  }
  return (
    <div className={styles.searchArea}>
      <input
        onChange={(e) => handleChange(e)}
        placeholder="Search here"
      ></input>
      <button onClick={() => handleSubmit()}>Search</button>
    </div>
  );
}

export default SearchBar;
