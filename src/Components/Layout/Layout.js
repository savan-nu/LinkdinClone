import React from "react";
import styles from "./Layout.module.css";
import LeftSide from "../Layout/Leftside/Leftside";
import RightSide from "./Rightside/Rightside";
import Main from "./Main/Main";
export default function Layout() {
  return (
    <div className={styles.layout}>
      <div>
        {" "}
        <LeftSide />{" "}
      </div>
      <div>
        <Main />
      </div>
      <div>
        <RightSide />
      </div>
    </div>
  );
}
