import React from 'react'
import NavbarLoginPage from '../../Components/NavbarLoginPage/NavbarLoginPage'
import styles from "./Login.module.css"
import Section from "../../Components/Section/Section"
export default function Longin() {
  return (
    <div className={styles.contanier}>
      <NavbarLoginPage/>
      <Section/>
    </div>
  )
}
