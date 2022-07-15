import React from "react";
import styles from "./searchbar.module.css";

function SearchBar({ searchTerm, setSearchTerm }) {
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit() {
    console.log(searchTerm);
  }
  return (
    <div className={styles.searchArea}>
      <input onChange={(e) => handleChange(e)}></input>
      <button onClick={() => handleSubmit()}>Search</button>
    </div>
  );
}

export default SearchBar;
