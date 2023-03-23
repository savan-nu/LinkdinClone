import {
  authentication,
  provider,
  storage,
} from "../constants/firebase_config";
import { SET_USER } from "../Actions/ActionType";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";


export const setuser = (userDetails) => ({
  type: SET_USER,
  user: userDetails,
});
export function signInAPI() {
  return async (dispatch) => {
    try {
      const res = await signInWithPopup(authentication, provider);
      const user = res.user;
      console.log(user.reloadUserInfo);
      localStorage.setItem("userLogin" , JSON.stringify(user.reloadUserInfo))
      dispatch(setuser(user.reloadUserInfo));
    } catch (error) {
      alert(error);
    }
  };
}
