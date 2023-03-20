import React from 'react'
import Article from './Article/Article';
import styles from "./Main.module.css";
import Sharebox from './Sharebox/Sharebox';

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.commonCard}>
        <Sharebox/>
        
      </div>
      <div className={styles.commonCard}>
        <Article/>
        
      </div>
    </div>
  )
}
