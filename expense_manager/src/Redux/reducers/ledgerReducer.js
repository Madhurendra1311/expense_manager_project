import {USER_LEDGER_REQUEST, USER_LEDGER_SUCCESS, USER_LEDGER_FAILURE} from "../actionTypes"

export const initState = {
    isLoading: false,
    error: false,
  };

  export default (state = initState, { type, payload }) => {
    console.log(type, payload);
    switch (type) {
      case USER_LEDGER_REQUEST:
        return {
          ...state,
          error: "",
          isLoading: true
        };
      case USER_LEDGER_SUCCESS:
        return {
          ...state,
          isLoading: false,
        };
      case USER_LEDGER_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: "something went wrong"
        };
      default:
        return state;
    }
  };