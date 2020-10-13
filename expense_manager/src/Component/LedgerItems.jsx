import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { amountTypeChange, getTransactionDataLedger, pageChange } from '../Redux/actions/ledgerAction'

function LedgerItems() {
    const transactionsData = useSelector(state => state.ledger.transactionDetails)
    const totalData = useSelector(state => state.ledger.totalData)
    const user_id = useSelector(state => state.login.user_id)
    console.log(transactionsData, totalData)
    const dispatch = useDispatch()
    const [pageNo, setPageNo] = useState(1)
    useEffect(() => {
        dispatch(getTransactionDataLedger(user_id))
    }, [])

    const handleSetAmountType = (amountType) => {
        setPageNo(1)
        dispatch(amountTypeChange(amountType))
        setTimeout(() => dispatch(getTransactionDataLedger(user_id)), 500)
    }

    const handlePageChange = (page) => {
        setPageNo(page)
        dispatch(pageChange(page))
        setTimeout(() => dispatch(getTransactionDataLedger(user_id)), 500)
    }
    const buttons = Math.ceil(totalData / 3)
    return (
        <div>Ledger Items
            <button onClick={() => handleSetAmountType('all')}>ALL</button>
            <button onClick={() => handleSetAmountType('debit')} >DEBIT</button>
            <button onClick={() => handleSetAmountType('credit')}>CREDIT</button>

            {
                transactionsData && transactionsData.map(data => {
                    return (
                        <div>
                            <div>{data.title}</div>
                            {/* <div>{data.amount}</div>
                            <div>{data.type}</div>
                            <div>{data.timestamp}</div> */}
                        </div>
                    )
                })
            }
            <div>
                {
                    buttons && buttons > 0 ?
                        <div className="row py-2">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                    {
                                        pageNo <= 1 ?
                                            <li className="page-item disabled">
                                                <p className="page-link" tabindex="-1"> First</p>
                                            </li>
                                            :
                                            <li className="page-item" onClick={() => handlePageChange(1)}>
                                                <p className="page-link">First</p>
                                            </li>
                                    }
                                    {
                                        pageNo <= 1 ?
                                            <li className="page-item disabled">
                                                <p className="page-link" tabindex="-1">Previous</p>
                                            </li>
                                            :
                                            <li className="page-item" onClick={() => handlePageChange(pageNo - 1)}>
                                                <p className="page-link">Previous</p>
                                            </li>
                                    }

                                    <li className="page-item active" onClick={() => handlePageChange(pageNo)}><p className="page-link" >{pageNo}</p></li>
                                    {
                                        pageNo <= buttons - 1 ?
                                            <li className="page-item" onClick={() => handlePageChange(pageNo + 1)}><p className="page-link" >{pageNo + 1}</p></li>
                                            :
                                            null
                                    }
                                    {
                                        pageNo <= buttons - 2 ?
                                            <li className="page-item" onClick={() => handlePageChange(pageNo + 2)}><p className="page-link" >{pageNo + 2}</p></li>
                                            :
                                            null
                                    }
                                    {
                                        pageNo >= buttons ?
                                            <li className="page-item disabled">
                                                <p onClick={() => handlePageChange(pageNo + 1)} className="page-link">Next</p>
                                            </li>
                                            :
                                            <li className="page-item">
                                                <p onClick={() => handlePageChange(pageNo + 1)} className="page-link">Next</p>
                                            </li>
                                    }
                                    {
                                        pageNo <= buttons && pageNo >= buttons - 2 ?
                                            <li className="page-item disabled">
                                                <p className="page-link">Last</p>
                                            </li>
                                            :
                                            <li className="page-item">
                                                <p onClick={() => handlePageChange(buttons - 2)} className="page-link">Last</p>
                                            </li>
                                    }
                                </ul>
                            </nav>
                        </div>
                        :
                        null
                }
            </div>
        </div>
    )
}

export default LedgerItems