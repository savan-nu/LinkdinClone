import React from 'react'
import styles from "./Section.module.css"
import sectionSidePhoto from "../../assets/image/sectionSidePhoto.svg"
import googleSvg from "../../assets/image/google.svg"
export default function Section() {
  return (
    <div className={styles.section}>
      <div className={styles.banner}>
        <div className={styles.welcomeMessage}>
            <h1>Welcome to your professional community</h1>
            <div className={styles.forms}>
               <div className={styles.inputForm}>
                <label>Email or phone</label>
                
                <input required type="text"></input>
                <label>Password</label>
                <input required type="password"></input>
                <a href='/'>Forgot password?</a>

                <button>Sign in</button>
               </div>
               <div className={styles.orLine}>
                <hr></hr><p>or</p><hr></hr>
               </div>
               <button className={styles.google}>
                <img src = {googleSvg} alt = "Google Login" className={styles.googleIcon}/>
                Sign in With Google
               </button> 
               <button className={styles.google}>
                New to Linkedin ? Join Now
               </button>
            </div>
        </div>
        <img src = {sectionSidePhoto} alt = "section" />
      </div>
    </div>
  )
}
