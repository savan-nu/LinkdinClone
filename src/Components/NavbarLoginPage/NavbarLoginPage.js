import React from 'react'
import styles from "./NavbarLoginPage.module.css";
import LinkedinLogo from "../../assets/image/login-logo.svg"

export default function NavbarLoginPage() {
  return (
    <div className={styles.nav} >
      <a href='/'>
        <img src={LinkedinLogo} alt = "Linkedin Logo"/>
      </a>
      <div className={styles.navbarbuttons}>
        <button className={styles.joinNow}>Join Now</button>
        <button className={styles.signIn}>Sign In</button>
      </div>
      
    </div>
  )
}
