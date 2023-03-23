import React from 'react'
import styles from "./Box.module.css"
export default function Box({children,margin = "" ,marginLeft = "150px"}) {
  return (
    <div  className={styles.box} style = {{"marginRight" : margin , "marginLeft" : marginLeft}}>
      {children}
    </div>
  )
}
