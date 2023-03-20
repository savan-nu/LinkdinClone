import React from "react";
import styles from "./Leftside.module.css";
import { Link } from "react-router-dom";
import profile from "../../../assets/image/profile.jpeg";
import Widget from "./Widget/Widget";
import Premimum from "./Premimum/Premimum";
import Plus from "../../../assets/image/plus-icon.svg";
import Box from '../Box';
export default function Leftside() {
  return (
    <div className={styles.leftside}>
      <Box >
        <div className={styles.userInfo}>
          <div className={styles.cardBackGround}></div>
          <Link to="" className={styles.linkTag}>
            <div className={styles.photo}>
              <img src={profile} alt="user"></img>
            </div>
            <div className={styles.link}>Savan Vaghani</div>
          </Link>
          <Link to="" className={styles.linkTag}>
            <div className={styles.addPhotoText}>
              ASE Intern @Tekion Corp | ITNU'23
            </div>
          </Link>
        </div>
        <Widget />
        <Premimum />
      </Box>
      <Box>
        <div className={styles.communityCard}>
        <Link to="" className={styles.communityLink}>
          <span>Groups</span>
        </Link>
        <Link to="" className={styles.communityLink}>
          <span>
            Events <img src={Plus} alt="plus" />
          </span>
        </Link>
        <Link to="" className={styles.communityLink}>
          <span>Follow Hastags</span>
        </Link>
        <Link to="" className={styles.communityLink}>
          <span>Discover More</span>
        </Link>
        </div>
      </Box>
      
    </div>
  );
}
