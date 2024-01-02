import React from "react";
import styles from "../components/SearchCountries.module.css";
function SearchCountries({ value, ChangedValue }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search for countries..."
        value={value}
        onChange={(e) => {
          console.log(e.target.value);
          return ChangedValue(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default SearchCountries;
