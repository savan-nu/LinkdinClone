import React, { useState } from "react";
import styles from "./Section.module.css";
import sectionSidePhoto from "../../assets/image/sectionSidePhoto.svg";
import googleSvg from "../../assets/image/google.svg";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { authentication } from "../../constants/firebase_config";
import { setuser } from '../../Actions/index';

export default function Section({
  signIn,
  user = "",
}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    signIn();
  };
  const signInWithEmailAndPasswordFirebase = async () => {
    console.log("Hello Redux");
    try{
      const user = await signInWithEmailAndPassword(authentication,email,password);
      console.log(user);
      dispatch(setuser(user));
    }
    catch(error){
      alert("Email is not register !!");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPasswordFirebase();
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className={styles.section}>
      {user && navigate("/home" , {replace:true})}
      <div className={styles.banner}>
        <div className={styles.welcomeMessage}>
          <h1>Welcome to your professional community</h1>
          <div className={styles.forms}>
            <form className={styles.inputForm} onSubmit={handleSubmit}>
              <label>Email or phone</label>

              <input required type="text" onChange={handleEmailChange}></input>
              <label>Password</label>
              <input
                required
                type="password"
                onChange={handlePasswordChange}
              ></input>
              <a href="/">Forgot password?</a>

              <button>Sign in</button>
            </form>
            <div className={styles.orLine}>
              <hr></hr>
              <p>or</p>
              <hr></hr>
            </div>
            <button className={styles.google} onClick={handleClick}>
              <img
                src={googleSvg}
                alt="Google Login"
                className={styles.googleIcon}
              />
              Sign in With Google
            </button>
            <button className={styles.google}>
              New to Linkedin ? Join Now
            </button>
          </div>
        </div>
        <img src={sectionSidePhoto} alt="section" />
      </div>
    </div>
  );
}
