import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from "../actionTypes";
  
  export const initState = {
    isLoading: false,
    error: false,
    isAuth: false,
    message: ''
  };
  
  export default (state = initState, { type, payload }) => {
    console.log(type, payload);
    switch (type) {
      case USER_LOGIN_REQUEST:
        return {
          ...state,
          error: "",
          isLoading: true
        };
      case USER_LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isAuth: payload.isAuth,
          message: payload.message
        };
      case USER_LOGIN_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: "something went wrong"
        };
      default:
        return state;
    }
  };
  