import axios from "axios";
import { USER_LEDGER_REQUEST, USER_LEDGER_SUCCESS, USER_LEDGER_FAILURE } from "../actionTypes";

export const userLedgerRequest = () => ({
    type: USER_LEDGER_REQUEST
  });
  
  export const userLedgerSuccess = (payload) => ({
    type: USER_LEDGER_SUCCESS,
    payload
  });
  
  export const userLedgerFailure = (payload) => ({
    type: USER_LEDGER_FAILURE,
    payload
  });
  
  export const userLogin = (payload) => (dispatch) => {
    console.log(payload)
    dispatch(userLoginRequest());
    axios
      .post("http://localhost:3000/transactions", payload)
      .then(res=>{
        
        dispatch(userLedgerSuccess())
        })
      .catch((err) => {
        dispatch(userLedgerFailure(err));
      });
  };