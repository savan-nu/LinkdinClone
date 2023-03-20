import React from 'react'
import styles from "./Sharebox.module.css";
import Photo from "../../../../assets/image/photo.svg"
import video from "../../../../assets/image/video.svg"
import event from "../../../../assets/image/event.svg"
import writeartical from "../../../../assets/image/writeartical.svg";
import user from "../../../../assets/image/profile.jpeg"
export default function Sharebox() {
  return (
    <div className={styles.sharebox}>
            <div className={styles.userspic}>
                <img src = {user} alt = "profilepic" />
                <button>Start a Post</button>
            </div>
            <div className={styles.postIcons}>
                <button>
                    <img src = {Photo} alt = "photoclick"/>
                    <span>Photo</span>
                </button>
                <button>
                    <img src = {video} />
                    <span>Video</span>
                </button>
                <button>
                    <img src = {event} />
                    <span>Event</span>
                </button>
                <button>
                    <img src = {writeartical} />
                    <span>Write Artical</span>
                </button>
            
            </div>
        </div>
  )
}
