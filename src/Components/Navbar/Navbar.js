import React from "react";
import styles from "./Navbar.module.css";
import navBarLogo from "../../assets/image/home-logo.svg";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar/Searchbar";
import Navmenu from "./Navmenu/Navmenu";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.content}>
        <div className={styles.navBarLogo}>
          <Link to="/home">
            <img src={navBarLogo} alt="Logo" />
          </Link>
        </div>
        <Searchbar/>
        <Navmenu/>
      </div>
    </div>
  );
}
