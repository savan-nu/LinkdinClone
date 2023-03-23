import React , {useContext , useState} from "react";
import styles from "./Sharebox.module.css";
import Photo from "../../../../assets/image/photo.svg";
import video from "../../../../assets/image/video.svg";
import event from "../../../../assets/image/event.svg";
import writeartical from "../../../../assets/image/writeartical.svg";
import userPic from "../../../../assets/image/profile.jpeg";
import { connect } from "react-redux";
import AuthContext from "../../../../context/AuthContext";
import PostModel from '../PostModel/PostModel';
import { useNavigate } from 'react-router-dom';
import MainNavbar from "../MainNavbar/MainNavbar";
export default function Sharebox() {
    const {user, setUser} = useContext(AuthContext);
    const [showModel, setshowModel] = useState(false);
    const nevigate = useNavigate();
    const handleClick = () => {
      setshowModel(prevState => !prevState);
    }
  return (
    <div className={styles.sharebox}>
      <MainNavbar handleClick = {handleClick} text = "Start a Post" />
      <div className={styles.postIcons}>
        <button>
          <img src={Photo} alt="photoclick" />
          <span>Photo</span>
        </button>
        <button>
          <img src={video} />
          <span>Video</span>
        </button>
        <button>
          <img src={event} />
          <span>Event</span>
        </button>
        <button>
          <img src={writeartical} />
          <span>Write Artical</span>
        </button>
      </div>
      {showModel && <PostModel handleClick = {handleClick} />}
    </div>
  );
}
