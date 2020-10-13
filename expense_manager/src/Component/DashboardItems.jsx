import React, { useState } from 'react'
import Styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import { addTransaction } from '../Redux/actions/addTransactionAction'
import { getTransactionData } from '../Redux/actions/dashboardAction'

const ModalWrapper = Styled.div ` 
      .modalbtn {
        width:120px;
        border-radius : 50%;
        font-size :80px;
        border : #1B5E20;
        background : #A5D6A7;
        color:white;
      }
      .modalbtn:hover{
        background : #1B5E20;
      }
`

const CalculatorWrapper = Styled.div`
    display:flex;
    justify-content:space-around;
`

const Calculator = Styled.div`
    height : min-height;
    width : 300px;
    padding : 30px;
    padding-bottom :30px;
    background : ${props => props.color ? props.color : null};
    color : white;
    font-size : 20px;  
    display : flex;
    flex-direction : column;
    align-items:flex-end;
   
  

`

function DashboardItems()
{
    const [ amountType, setAmountType ] = useState('')
    const [ title, setTitle ] = useState('')
    const [ amount, setAmount ] = useState(0)

    const last5Transaction = useSelector( state => state.dashboard.transactionDetails)
    const totalBalance = useSelector( state => state.dashboard.totalBalance)
    const totalExpenses = useSelector( state => state.dashboard.totalExpenses)
    const totalIncome = useSelector( state => state.dashboard.totalIncome)
    const user_id = useSelector( state => state.login.user_id)
    const dispatch = useDispatch()
    console.log(totalBalance, totalExpenses, totalIncome, last5Transaction)


    const handleTitleChange = (e)=>{
        setTitle(e.target.value)
    }

    const handleAmountType = (e)=>{
        setAmountType(e.target.value)
    }

    const handleAmount=(e)=>{
        setAmount(e.target.value)
    }

    const handleAddTransaction = ()=>{
        let date = new Date().toLocaleString();
        console.log(date, title, amountType, amount, user_id)
        let payload = {
            user_id: user_id,
            title: title,
            type: amountType,
            amount: Number(amount),
            timestamp: date
        }
        dispatch(addTransaction(payload))
        setTimeout(()=> dispatch(getTransactionData(user_id)), 500)
    }
    return(
        <>
            <CalculatorWrapper>
                    <Calculator color="#D81B60" style={{}}>
                        <div>{totalExpenses}</div>
                        <div>Total-Expense</div>
                    </Calculator>
                    <Calculator color="#00ACC1">
                        <div>{totalIncome}</div>
                        <div>Total-Income</div>
                    </Calculator>
                    <Calculator color="#1E88E5">
                    <div>{totalBalance}</div>
                        Total-Balance
                    </Calculator>
                </CalculatorWrapper>
            <ModalWrapper>
                To add Expense/Income click Below
                {/* <!-- Button trigger modal --> */}
                    <button type="button" class="btn modalbtn" data-toggle="modal" data-target="#exampleModal">
                        +
                    </button>

                    {
                        last5Transaction && last5Transaction.map(data=>{
                            return(
                                <>
                                    <div>{data.title}</div>
                                    <div>{data.amount}</div>
                                    <div>{data.type}</div>
                                    <div>{data.timestamp}</div>
                                </>

                            )
                       
                        })
                    }

                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Expense Manager</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    {/* <label for="exampleInputPassword1">Password</label> */}
                                    <input 
                                        type="text"
                                         class="form-control"
                                          id="exampleInputPassword1"
                                          placeholder="Title"
                                          onChange={handleTitleChange}
                                          />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Type of Transaction</label>
                                    <select class="form-control" id="exampleFormControlSelect1" onChange={handleAmountType}>
                                        <option selected>Select Amount Type</option>
                                        <option value="debit">Debit</option>
                                        <option value="credit">Credit</option>                                        
                                    </select>
                                </div>
                                <div class="form-group">
                                    {/* <label for="exampleInputPassword1">Password</label> */}
                                    <input 
                                        type="number"
                                         class="form-control"
                                          id="exampleInputPassword1"
                                          placeholder="Amount"
                                          onChange={handleAmount}
                                          />
                                </div>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal"  onClick={handleAddTransaction}>Save changes</button>
                            </div>
                        </div>
                        </div>
                    </div>

                </ModalWrapper>
        </>
    )
    
}

export default DashboardItems