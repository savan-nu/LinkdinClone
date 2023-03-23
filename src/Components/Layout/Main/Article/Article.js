import React , {useState} from "react";
import styles from "./Article.module.css";
import userPic from "../../../../assets/image/user.svg";

import commentPic from "../../../../assets/image/comment.svg";
import repost from "../../../../assets/image/repost.svg";
import send from "../../../../assets/image/send.svg";
import { doc, setDoc } from "firebase/firestore"; 
import db from "../../../../constants/firebase_config"
import Comment from "./Comments/Comment";

export default function Article({
  Tittle = "Savan",
  Discription = "Desc",
  imageUrl = "",
  date = "",
  profilePic = "",
  numberOfLike = 0,
  comments = [],
  userEmail,
  id,
}) 
{
  const [numberOfLikes, setNumberOfLikes] = useState(numberOfLike);
  const [isCommentBoxOpen,setIsCommentBoxOpen] = useState(false);
  const [comment , setComment] = useState(comments);
  const handleLike = async () => {
    setNumberOfLikes(prevState => prevState+1);
    await setDoc(doc(db,userEmail,id) , {numberOfLike : numberOfLike+1} ,{merge:true});
  }
  const handleComment = () => {
    setIsCommentBoxOpen(prevState  => !prevState)
  }
  return (
    <div className={styles.article}>
      <div className={styles.sharedActor}>
        {profilePic ? (
          <img src={profilePic} alt="profile pic" />
        ) : (
          <img src={userPic} alt="user Pic" />
        )}
        <div className={styles.userInfo}>
          <span>{Tittle}</span>
          {/* <span>Info</span> */}
          <span>{date}</span>
        </div>
      </div>
      <div className={styles.discription}>{Discription}</div>
      <div className={styles.sharedImage}>
        {imageUrl ? (
          <img src={imageUrl} alt="post "></img>
        ) : (
          <img src={userPic} alt="user pic"></img>
        )}
      </div>
      <ul className={styles.socialCounts}>
        <li>
          {numberOfLikes > 0 && (
            <button>
              <img
                src="https://static.licdn.com/sc/h/5zhd32fqi5pxwzsz78iui643e"
                alt="Like "
              />
              <img
                src="https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
                alt="Celebrate"
              />
              <span>{numberOfLikes}</span>
            </button>
          )}
        </li>
        <li>
          <span>{comment.length} comments</span>
        </li>
      </ul>
      <div className={styles.socialAction}>
        <button onClick={handleLike}>
          <img
            src="https://static.licdn.com/sc/h/5zhd32fqi5pxwzsz78iui643e"
            alt="Like"
          />
          <span>Like</span>
        </button>
        <button onClick = {handleComment}>
          <img src={commentPic} alt="comment" />
          <span>Comment</span>
        </button>
        <button>
          <img src={repost} alt="repost" />
          <span>Repost</span>
        </button>
        <button>
          <img src={send} alt="comment" />
          <span>Send</span>
        </button>
      </div>
      { isCommentBoxOpen && <Comment id = {id} comments = {comment} setComments = {setComment}/> }
    </div>
  );
}
