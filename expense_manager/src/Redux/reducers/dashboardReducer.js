import {TRANSACTION_REQUEST,TRANSACTION_SUCCESS,TRANSACTION_FAILURE} from "../actionTypes"

const initState = {
    transactionIsLoading : false ,
    transactionDetails : [],
    transactionIsError : false
}

const dashboardReducer = (state=initState ,{type,payload} )=>
{
    switch(type){
        case TRANSACTION_REQUEST : 
            return{
                ...state,
                transactionIsLoading : true,
                transactionIsError :false
            }
        case TRANSACTION_SUCCESS :
            return {
                ...state,
                transactionIsLoading : false,
                transactionDetails : payload,
                transactionIsError :false
            }
        case TRANSACTION_FAILURE :
            return {
                ...state,
                transactionIsLoading : false,
                transactionIsError : true
            }
        default :
            return{
                ...state
            }
        

    }
}

export default dashboardReducer