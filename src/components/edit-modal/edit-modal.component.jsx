import React, {useContext, useState} from 'react'
import DatePicker from 'react-datepicker'
import {TransactionsContext} from '../../providers/transactions/transactions.provider';  

export default function EditModal({ toggleEditModal, transaction}) {
    const {editTransaction} = useContext(TransactionsContext);
    const [transactionDetails, setTransactionDetails] = useState({
        ...transaction
    });


    const [date, setDate] = useState(new Date(transactionDetails.valueDate));

    function handleDateChange(date){
        const dateString= `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        setTransactionDetails({
            ...transactionDetails,
            valueDate: dateString
        })
        setDate(date)
    }
    
   
    function handleTextChange(event){
        const {value} = event.target;
        setTransactionDetails({
            ...transactionDetails,
            [event.target.name]: value
        })
        console.log(transactionDetails)
    }



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
                    <DatePicker
                    shouldCloseOnSelect={true}
                    name='date'
                    className='border-2 border-black'
                    dateFormat="yyyy-MM-dd"
                    placeholderText='select date'
                    selected={date}
                    onChange={(date)=> {
                    // setDate(date);
                    handleDateChange(date)
                    }}
                    />
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
                            <option value="Collection">Collection</option>
                            <option value="Airtime">Airtime</option>
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
