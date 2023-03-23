import React, { useState, useContext } from "react";
import styles from "./PostModel.module.css";
import close from "../../../../assets/image/close.svg";
import profilePic from "../../../../assets/image/profile.jpeg";
import photo from "../../../../assets/image/photo.svg";
import video from "../../../../assets/image/video.svg";
import AuthContext from "../../../../context/AuthContext";

import db, {
  authentication,
  provider,
  store,
} from "../../../../constants/firebase_config.js";
import axios from "axios";
import { setDoc, doc, collection, query, getDocs } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import Loader from "../../Loader/Loader";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PostModel({ handleClick }) {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const { user, setUser,contextPosts,setContextPosts } = useContext(AuthContext);
  const nevigate = useNavigate();
  // const {data} = useShortenUrl(shareImage);
  console.log(user);
  const putDataOnDataBase = async () => {
    // console.log(data.link);
    const timestamp = new Date().getTime().toString();

    console.log(shareImage);
    try {
      let downloadUrl;
      const storageRef = ref(store, `${shareImage.name}`);
      const upload = uploadBytesResumable(storageRef, shareImage);
      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");

              break;
            default:
              break;
          }
        },
        (error) => {
          console.log("error");
          alert(error);
        },
        async () => {
          await getDownloadURL(upload.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            downloadUrl = downloadURL;
          });
          try {
            await setDoc(doc(db, user.email, timestamp), {
              ArticleText: editorText,
              ImageUrl: downloadUrl,
              date: new Date().toLocaleString(),
              id : timestamp,
              numberOfLike : 0,
              comments : []
            });
            setIsLoading(false);
            setShareImage("");
            setEditorText("");
            const post = {
              ArticleText: editorText,
              ImageUrl: downloadUrl,
              date: new Date().toLocaleString(),
              id : timestamp,
              numberOfLike : 0,
              comments : []
            };
            setContextPosts(prevArray => [post , ...prevArray])
            handleClick();
          } catch (error) {
            console.log(error);
          }
        }
      );
    } catch (error) {
      alert(error);
    }
  };
  // user && putDataOnDataBase();
  const handleChange = (event) => {
    setEditorText(event.target.value);
  };
  const handleChangeImage = (event) => {
    const image = event.target.files[0];
    if (image === "" || image === undefined) {
      alert("select image first");
      return;
    }

    setShareImage(image);
  };
  const handlePostClick = () => {
    setIsLoading(true);
    putDataOnDataBase();
  };
  const handleImage = () => {
    document.getElementById("file").click();
  };
  return (
    <div className={styles.postModel}>
      <div className={styles.content}>
        {isloading ? (
          <Loader></Loader>
        ) : (
          <>
            <div className={styles.header}>
              <h2>Create a Post</h2>
              <button onClick={handleClick}>
                <img src={close} alt="close button" />
              </button>
            </div>

            <div className={styles.information}>
              <div className={styles.userInfo}>
                {user && user.photoUrl ? (
                  <img src={user.photoUrl} alt="user"></img>
                ) : (
                  <img src={profilePic} alt="user"></img>
                )}
                <span>
                  {user && user.displayName ? user.displayName : "Savan"}
                </span>
              </div>
            </div>
            <div className={styles.editor}>
              <textarea
                value={editorText}
                placeholder="What do you want to talk about?"
                onChange={handleChange}
                autoFocus={true}
              />
              {shareImage && (
                <img
                  src={URL.createObjectURL(shareImage)}
                  alt="Preview"
                  className={styles.imagePreview}
                />
              )}
            </div>
            <div className={styles.sharedCreation}>
              <div className={styles.attachAssets}>
                <input
                  type="file"
                  accept="image/gif,image/png , image/jpg , image/jpeg"
                  name="image"
                  id="file"
                  className={styles.hidden}
                  onChange={handleChangeImage}
                />
                <button className={styles.attachButton} onClick={handleImage}>
                  <img src={photo} alt="Attach photo" />
                </button>
              </div>
              <div className={styles.attachAssets}>
                <button className={styles.attachButton} onClick={handleImage}>
                  <img src={video} alt="Attach video" />
                </button>
              </div>
            </div>
            <div>
              <button
                className={styles.postButton}
                disabled={editorText || shareImage ? false : true}
                onClick={handlePostClick}
              >
                Post
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
