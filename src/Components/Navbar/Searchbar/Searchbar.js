import React from 'react'
import styles from "./Searchbar.module.css";
import searchIcon from "../../../assets/image/search-icon.svg"
export default function Searchbar() {
  return (
    <div className={styles.searchbar}>
      <div className={styles.searchbarInput}>
        <input type="text" placeholder='Search' />
      </div>
      <div className={styles.searchIcon}>
        <img src = {searchIcon} alt = "searchlogo" />
      </div>
    </div>
  )
}
