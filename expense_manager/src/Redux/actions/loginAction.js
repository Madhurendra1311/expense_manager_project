import axios from "axios";
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from "../actionTypes";

export const userLoginRequest = () => ({
    type: USER_LOGIN_REQUEST
  });
  
  export const userLoginSuccess = (payload) => ({
    type: USER_LOGIN_SUCCESS,
    payload
  });
  
  export const userLoginFailure = (payload) => ({
    type: USER_LOGIN_FAILURE,
    payload
  });
  
  export const userLogin = (payload) => (dispatch) => {
    console.log(payload)
    dispatch(userLoginRequest());
    axios
      .get("http://localhost:3000/usersData", payload)
      .then(res=>{
        let userData = res.data
        let isValidation = false
        let message = "Account Doesnot Exist"
        for(let i = 0; i < userData.length; i++){
            if(userData[i].email === payload.email){
                if(userData[i].password === payload.password){
                    isValidation = true
                    message = "Login Success"
                }
                else{
                    isValidation = false
                    message = "Wrong Password"  
                }
            }
        }
        dispatch(userLoginSuccess({isAuth: isValidation, message: message}))
        })
      .catch((err) => {
        dispatch(userLoginFailure(err));
      });
  };