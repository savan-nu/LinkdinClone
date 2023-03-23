import React  from 'react'
import styles from "./Premimum.module.css"
import { Link } from 'react-router-dom';
import bookmark from "../../../../assets/image/item-icon.svg"
export default function Premimum() {
  return (
    <>
    <div className={styles.premimum}>
        <span>Achive your goals faster with Premimum</span>
        <Link to = "" className = {styles.premimumLink}>
            Try Premimum Free Up to 25% off
        </Link>
    </div>
    <div className={styles.bookmark}>
        <Link to = "" className = {styles.bookmarkLink}>
           <img src = {bookmark} alt = "bookmark" />
        </Link>
        <span>My items</span>
    </div>
    </>
  )
}
