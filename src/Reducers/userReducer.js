
import { SET_USER, SIGN_OUT } from "../Actions/ActionType";
const IntialState = {
    user : null
}

const userReducer = (state = IntialState , action) =>{
    switch(action.type){
        case SET_USER : 
            return {
                ...state,
                user : action.user
            }
        case SIGN_OUT : 
           return{
            ...state,
            user : ""
           }
        default : 
            return state;
        
    }
}

export default userReducer;