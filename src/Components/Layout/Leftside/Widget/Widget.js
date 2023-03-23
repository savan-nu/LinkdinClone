import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Widget.module.css"
export default function Widget() {
  return (
    <div className={styles.widget}>
      <Link to ="" className={styles.connectionDetails}>
        <span>Who's viewd your profile</span>
        <span className={styles.connnectionNumber}>223</span>
      </Link>
      <Link to ="" className={styles.connectionDetails}>
        <span>Impressions of your Post</span>
        <span className={styles.connnectionNumber}>8830</span>
      </Link>
    </div>
  )
}
