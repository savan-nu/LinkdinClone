import React , {useContext} from "react";
import { Link } from "react-router-dom";
import styles from "./SignOut.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SIGN_OUT } from "../../../Actions/ActionType";
import AuthContext from "../../../context/AuthContext";
export default function SignOut() {
  const {user, setUser} = useContext(AuthContext);
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const handleClick = () => {
    dispatch({ type: SIGN_OUT });
    setUser("");
    localStorage.removeItem('userLogin');
    nevigate('/',{replace:true});
  };
  return (
    <div className={styles.signOut} onClick={handleClick}>
      <Link to="" className={styles.signOutLink}>
        Sign out
      </Link>
    </div>
  );
}
