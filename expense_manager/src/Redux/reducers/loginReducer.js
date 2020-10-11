
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE , LOGOUT} from "../actionTypes";

  
  export const initState = {
    isLoading: false,
    error: false,
    isAuth: false,
    message: '',
    userData : [],
    user_id : 0
  };
  
  export default (state = initState, { type, payload }) => {
    console.log(type, payload);
    switch (type) {
      case USER_LOGIN_REQUEST:
        return {
          ...state,
          error: false,
          isLoading: true
        };
      case USER_LOGIN_SUCCESS:
        console.log(payload[0].id)
        return {
          ...state,
          isLoading: false,
          error : payload.length ? false :true,
          isAuth: payload.length ? true :false,         
          userData:payload,
          user_id:payload[0].id

//           error: "",
//           isLoading: true
//         };
//       case USER_LOGIN_SUCCESS:
//         return {
//           ...state,
//           isLoading: false,
//           isAuth: payload.isAuth,
//          message: payload.message
 };
      case USER_LOGIN_FAILURE:
        return {
          ...state,
          isLoading: false,
          isAuth: false,
          error: true
//           error: "something went wrong"
        };

      case LOGOUT :
        return {
          ...state,
          isAuth : false
        }

      default:
        return state;
    }
  };
  