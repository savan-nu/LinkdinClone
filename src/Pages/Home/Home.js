import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Navbar from '../../Components/Navbar/Navbar'
import styles from "./Home.module.css"
export default function Home() {
  return (
    <div className={styles.homepage}>
        <Navbar/>
        <Layout/>
    </div>
  )
}
