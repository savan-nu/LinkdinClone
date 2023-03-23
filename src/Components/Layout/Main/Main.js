import React, { useEffect, useContext, useState } from "react";
import Article from "./Article/Article";
import styles from "./Main.module.css";

import Sharebox from "./Sharebox/Sharebox";

import { setDoc, doc, collection, query, getDocs } from "firebase/firestore";
import db from "../../../constants/firebase_config";
import AuthContext from "../../../context/AuthContext";

export default function Main() {
  const { user ,contextPosts,setContextPosts} = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const post = [];
    const getData = async () => {
      const q = query(collection(db, user.email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc);
        console.log(doc.data());
        const data = doc.data();
        console.log(data);
        post.push(data);
      });
      post.reverse();
      setPosts(post);
      setContextPosts(post);
    };
    getData();
  }, [user]);
  return (
    <div className={styles.main}>
      <div className={styles.commonCard}>
        <Sharebox />
      </div>
      {console.log(posts)}
      {contextPosts.map((post) => {
        
        return (
          <div className={styles.commonCard}>
            <Article
              Tittle={user.displayName}
              Discription={post.ArticleText}
              imageUrl={post.ImageUrl}
              profilePic={user?.photoUrl}
              date = {post.date}
              id = {post.id}
              key = {post.id}
              numberOfLike = {post.numberOfLike}
              userEmail = {user.email}
              comments = {post.comments}
            />
          </div>
        );
      })}
    </div>
  );
}
