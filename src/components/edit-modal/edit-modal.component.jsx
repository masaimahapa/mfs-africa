import React, {useContext, useState, useEffect} from 'react'

import {TransactionsContext} from '../../providers/transactions/transactions.provider';  

export default function EditModal({showEdit , toggleEditModal, transaction}) {
    const {transactions, editTransaction} = useContext(TransactionsContext);
    
    const [transactionDetails, setTransactionDetails] = useState({
        ...transaction
    });

    function handleTextChange(event){
        const {value} = event.target;
        setTransactionDetails({
            ...transactionDetails,
            [event.target.name]: value
        })
        console.log(transactionDetails)
    }
    if (!showEdit) return;

  return (
    <div className='fixed z-10 inset-0  bg-slate-900 opacity-90 pt-10 ' role="dialog" aria-modal="true">
        <div className='justify-center text-center block bg-white max-w-lg  mx-auto'>
            <div className=' block'>
                <h4 className=' font-bold text-lg '>Edit row information</h4>
            </div>
            <div className='flex-row'>
                <form>
                    <label className='block'>
                        <span className='block font-bold text-sm'>Value date</span>
                        <input type="text"
                        datepicker
                        datepicker-autohide
                        name="valueDate"
                         className='border-2 border-black' 
                         placeholder="value date"
                         value={transactionDetails.valueDate}
                          onChange={handleTextChange}/>
                    </label>

                    <label className='block'>
                        <span className='block font-bold text-sm'>Movement Type</span>
                        {/* <input type="text" placeholder="value date"/> */}
                        <select name="movementType"
                         value={transactionDetails.movementType}
                         onChange={handleTextChange}
                          className='border-2 border-black'>
                            <option value="">select</option>
                            <option value="Money Transfer">Money Transfer</option>
                            <option value="loan">Loan</option>
                            <option value="repayment">Repayment</option>
                        </select>
                    
                    </label>

                    <label className='block'>
                        <span className='block font-bold text-sm'>Status</span>
                        <select name="status"
                         value={transactionDetails.status}
                         onChange={handleTextChange}
                          className='border-2 border-black'>
                            <option value="">select</option>
                            <option value="Active">Active</option>
                            <option value="Error">Error</option>
                            <option value="Processed">Processed</option>
                        </select>
                    </label>
                    
                    
                </form>
            </div>
            <div className='modal-footer'>
                <button className='bg-slate-400 m-2 rounded shadow-lg p-1' onClick={toggleEditModal}>Cancel</button>
                <button className=' bg-orange-400 m-2 rounded shadow-lg p-1' onClick={()=>{
                    editTransaction(transaction['transactionId'], transactionDetails);
                    toggleEditModal();
                }
                    }>Save changes</button>
            </div>
        </div>
    </div>
  )
}
