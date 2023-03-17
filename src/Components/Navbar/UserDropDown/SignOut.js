import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./SignOut.module.css"
export default function SignOut() {
  return (
    <div className={styles.signOut}>
    <Link to = "" className={styles.signOutLink}>
        Sign out
    </Link>
    </div>
  )

}
