import React from "react";
import styles from "./MainNavbar.module.css";
import AuthContext from "../../../../context/AuthContext";
import { useContext } from "react";
import userPic from "../../../../assets/image/profile.jpeg";
export default function MainNavbar({
  handleClick,
  text,
  isInput = false,
  isTextAre = false,
  editorText
}) {
  const { user, setUser } = useContext(AuthContext);
  return (
    <div className={styles.userspic} style = {{marginLeft : isTextAre ? "60px" : ""}}>
      {user && user.photoUrl ? (
        <img src={user.photoUrl} alt="user"></img>
      ) : (
        <img src={userPic} alt="user"></img>
      )}
      {!isInput && !isTextAre && <button onClick={handleClick}>{text}</button>}
      {isInput && (
        <input onChange={handleClick} placeholder={text} value = {editorText} autoFocus></input>
      )}
      {isTextAre && <div className={styles.comment}>{text}</div>}
    </div>
  );
}
