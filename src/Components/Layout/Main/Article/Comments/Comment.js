import React, { useState,useContext } from "react";
import MainNavbar from "../../MainNavbar/MainNavbar";
import styles from "./Comment.module.css";
import { doc, setDoc } from "firebase/firestore"; 
import db from "../../../../../constants/firebase_config";
import AuthContext from '../../../../../context/AuthContext';

export default function Comment({ id, comments,setComments}) {
  const [editorText, setEditorText] = useState();
  const { user } = useContext(AuthContext);
  const handleChange = (event) => {
    setEditorText(event.target.value);
  };
  const handlePostClick = () => {
    setComments(prevComment => [editorText , ...prevComment]);
    setDoc(doc(db,user.email,id) , {comments : [editorText , ...comments]} ,{merge:true});
    setEditorText("");
  };
  return (
    <>
      <div>
        <MainNavbar
          text="Add Comment"
          handleClick={handleChange}
          isInput={true}
          editorText = {editorText}
        />
        {editorText && (
          <button className={styles.postButton} onClick={handlePostClick}>
            Post
          </button>
        )}
      </div>
      {comments.length > 0 && comments.map(comm => <MainNavbar text={comm} isTextAre={true} />)}
    </>
  );
}
