import React from 'react'
import Styled from 'styled-components'
import {useSelector} from 'react-redux'

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
    const transactionDetails = useSelector( state => state.dashboard.transactionDetails)
    return(
        <>
            <CalculatorWrapper>
                    <Calculator color="#D81B60" style={{}}>
                        <div>{transactionDetails && transactionDetails.filter(item=>item.type==="credit").reduce((a,item)=> a+Number(item.amount),0)}</div>
                        <div>Total-Expense</div>
                    </Calculator>
                    <Calculator color="#00ACC1">
                        <div>{transactionDetails && transactionDetails.filter(item=>item.type==="debit").reduce((a,item)=> a+Number(item.amount),0)}</div>
                        <div>Total-Income</div>
                    </Calculator>
                    <Calculator color="#1E88E5">
                    <div>{transactionDetails && transactionDetails.reduce((a,item)=> item.type==="debit" ? a+Number(item.amount) : a-Number(item.amount),0)}</div>
                        Total-Balance
                    </Calculator>
                </CalculatorWrapper>
            <ModalWrapper>
                To add Expense/Income click Below
                {/* <!-- Button trigger modal --> */}
                    <button type="button" class="btn modalbtn" data-toggle="modal" data-target="#exampleModal">
                        +
                    </button>

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
                                          placeholder="title"
                                          />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Type of Transaction</label>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Debit</option>
                                        <option>Credit</option>                                        
                                    </select>
                                </div>
                                <div class="form-group">
                                    {/* <label for="exampleInputPassword1">Password</label> */}
                                    <input 
                                        type="number"
                                         class="form-control"
                                          id="exampleInputPassword1"
                                          placeholder="amount"
                                          />
                                </div>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                        </div>
                    </div>

                </ModalWrapper>
        </>
    )
    
}

export default DashboardItems