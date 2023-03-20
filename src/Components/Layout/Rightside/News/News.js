import React from 'react'
import styles from "./News.module.css"
export default function News({tittle,time , reader}) {
  return (
    <div className={styles.newsRender}>
        <h5>{tittle}</h5>
        <p>{time} ago. {reader} readers</p>
    </div>
  )
}
