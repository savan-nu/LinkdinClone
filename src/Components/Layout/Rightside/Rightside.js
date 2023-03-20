import React from "react";
import Box from "../Box";
import styles from "./Rightside.module.css";
import Feed from "../../../assets/image/feed-icon.svg";
import News from "./News/News";
import Footer from "./Footer/Footer";
export default function RightSide() {
  return (
    <>
      <Box margin="300px" marginLeft="0">
        <div className={styles.rightside}>
          <div className={styles.news}>
            <p>LinkedIn News</p>
            <img src={Feed} alt="Feed" />
          </div>
          <News
            tittle="$54B lifeline for credit suisse"
            time="9h"
            reader="12,286"
          />
          <News
            tittle="$54B lifeline for credit suisse"
            time="9h"
            reader="12,286"
          />
          <News
            tittle="$54B lifeline for credit suisse"
            time="9h"
            reader="12,286"
          />
          <News
            tittle="$54B lifeline for credit suisse"
            time="9h"
            reader="12,286"
          />
        </div>
      </Box>
      <Box margin="300px" marginLeft="0" >
        <Footer/>
      </Box>
      
    </>
  );
}
