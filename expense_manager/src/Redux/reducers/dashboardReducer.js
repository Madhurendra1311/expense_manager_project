import {TRANSACTION_REQUEST,TRANSACTION_SUCCESS,TRANSACTION_FAILURE} from "../actionTypes"

const initState = {
    transactionIsLoading : false ,
    transactionDetails : [],
    transactionIsError : false,
    totalIncome:0,
    totalExpenses:0,
    totalBalance:0
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
            let totalIncome= 0
            let totalExpenses =0
            for(let i = 0; i < payload.length; i++){
                if(payload[i].type === "credit")
                    totalIncome += payload[i].amount
                else if(payload[i].type === "debit")
                    totalExpenses += payload[i].amount
            }
            let last5Transaction = payload.sort((a,b)=>(b.id-a.id)).slice(0,5)
            console.log(totalExpenses, totalIncome, last5Transaction)
            return {
                ...state,
                transactionIsLoading : false,
                transactionDetails : last5Transaction,
                totalIncome: totalIncome,
                totalExpenses:totalExpenses,
                totalBalance: totalIncome - totalExpenses,
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