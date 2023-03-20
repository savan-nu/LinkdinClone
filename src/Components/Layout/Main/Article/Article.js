import React from "react";
import styles from "./Article.module.css";
import userPic from "../../../../assets/image/user.svg";

import comment from "../../../../assets/image/comment.svg";
import repost from "../../../../assets/image/repost.svg";
import send from "../../../../assets/image/send.svg";
export default function Article() {
  return (
    <div className={styles.article}>
      <div className={styles.sharedActor}>
        <img src={userPic} alt="user Pic" />
        <div className={styles.userInfo}>
          <span>Tittle</span>
          <span>Info</span>
          <span>Date</span>
        </div>
      </div>
      <div className={styles.discription}>Discription</div>
      <div className={styles.sharedImage}>
        <img src={userPic} alt="user pic"></img>
      </div>
      <ul className={styles.socialCounts}>
        <li>
          <button>
            <img
              src="https://static.licdn.com/sc/h/5zhd32fqi5pxwzsz78iui643e"
              alt="Like "
            />
            <img
              src="https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
              alt="Celebrate"
            />
            <span>12</span>
          </button>
        </li>
        <li>
          <span>4 comments</span>
        </li>
      </ul>
      <div className={styles.socialAction}>
        <button>
          <img
            src="https://static.licdn.com/sc/h/5zhd32fqi5pxwzsz78iui643e"
            alt="Like"
          />
          <span>Like</span>
        </button>
        <button>
          <img src={comment} alt="comment" />
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
    </div>
  );
}
