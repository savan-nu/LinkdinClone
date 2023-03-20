import {
  authentication,
  provider,
  storage,
} from "../constants/firebase_config";
import {signInWithPopup} from "firebase/auth"
export function signInAPI() {
  return async (dispatch) => {
    try{
      const res = await signInWithPopup(authentication,provider);
      const user = res.user;
      console.log(user);
    }
    catch(error){
        alert(error);
    }
  };
}
