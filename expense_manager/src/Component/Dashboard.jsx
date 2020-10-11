import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import Styled from 'styled-components';
import {Link, Redirect} from 'react-router-dom' 
import {getTransactionData} from '../Redux/actions/dashboardAction'

const NavbarWrapper = Styled.div`

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
function DashBoard() {
  const dispatch = useDispatch()
  const transactionDetails = useSelector( state => state.dashboard.transactionDetails)
  const userData = useSelector( state => state.login.userData)
  const user_id = useSelector( state => state.login.user_id)
  console.log(userData)
  React.useEffect(()=>{
    dispatch(getTransactionData(user_id))
  },[dispatch])
    return (
      <>
      <nav class="navbar navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" style={{alignItems:"flex-start"}}></span>
        </button>
        <div style={{color:"white"}}>Welcome {userData[0].name}</div>
      </nav> 
      <div className="row" style={{height:"1000px"}}>           
      <div className="col-3 collapse" id="navbarToggleExternalContent"  style={{background:"#212121"}}>
        <div className="row" style={{color:"white" ,marginLeft:"30px"}}>
          <Link to="/dashboard"><div className="col-12" style={{padding:"30px"}}>DashBoard</div></Link>
          <Link to="/ledger"><div className="col-12" style={{padding:"30px"}}>Ledger</div></Link>
          <Link to="/login"><div className="col-12" style={{padding:"30px"}}>Logout</div></Link>
        </div>
      </div>
        <div className="col-9">
          <NavbarWrapper>
              Welcome name
          </NavbarWrapper>
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
                          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          ...
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>

            </ModalWrapper>
            </div>
        </div>
      </>
    );
}


export default DashBoard;