import React, { useContext , useState} from 'react'
import DatePicker from "react-datepicker";
import {BiEdit} from 'react-icons/bi';
import {RiDeleteBin5Line} from 'react-icons/ri';
import {FiEye, FiEyeOff} from 'react-icons/fi'

import {TransactionsContext} from '../../providers/transactions/transactions.provider';

export default function TransactionsTable({toggleEditModal, toggleDeleteModal}) {
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    const {transactions, toggleAmount} = useContext(TransactionsContext);
  return (
    <div>
        <div>
            <form>
                <div className=' flex justify-between mx-2'>
                <div>
                <select>
                    <option>Local</option>
                    <option>National</option>
                </select>
                <input type="search" placeholder='Search' className='p-2 text-slate-500 text-sm'/>
                </div>
                <div className='flex'>
                <select>
                    <option value="">Filter</option>
                    <option value="active">Active</option>
                    <option value="error">Error</option>
                </select>
                <select>
                    <option value="">Export as</option>
                    <option value="csv">CSV</option>
                    <option value="pdf">PDF</option>
                </select>
                <DatePicker
    name='startEndRange'
    className='border'
    dateFormat="yyyy-MM-dd"
    placeholderText='Start date - End date'
    // selected={startDate}
    startDate={startDate}
    endDate={endDate}
    selectsRange
    onChange={(dates)=> {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    }}
    />
                </div>
               
                </div>
            </form>
        </div>
        <table className=" table-fixed w-full m-3">
  <thead>
    <tr className=''>
        <td className=' left-0'>
            <input type="checkbox" />
        </td>
      <td className=' font-bold'>Value Date</td>
      <td className=' font-bold'>Transaction ID</td>
      <td className=' font-bold'>Movement Type</td>
      <td className=' font-bold'>Amount</td>
      <td className=' font-bold'>Status</td>
      <td className=' font-bold'>Action</td>
    </tr>
  </thead>
  <tbody>
   
        {
            Object.keys(transactions).map((transactionId , index)=> {
                const transaction = transactions[transactionId];
                const backgroundColour = index % 2 === 0?"bg-gray-200":"bg-white"
                return (
                    <tr  className={`table-row ${backgroundColour}`} key={transaction.transactionId}>
                        <td  className="table-cell"><input type="checkbox" /></td>
                        <td className="table-cell"><span>{transaction.valueDate}</span></td>
                        <td  className="table-cell">{transaction.transactionId}</td>
                        <td  className="table-cell">{transaction.movementType}</td>
                        <td>
                            
                           
                            {
                                transaction.showAmount
                                ?<div className='flex'> {transaction.amount} UGX<FiEye onClick={() =>toggleAmount(transaction.transactionId)} /></div>
                                :<div className='flex'>* * * * *<FiEyeOff onClick={() =>toggleAmount(transaction.transactionId)} /></div>
                                 
                            }
                            

                        </td>
                        <td
                        className={`${transaction.status==='Active'
                        ? 'text-green-800'
                        : 'text-red-800'}`}
                        >{transaction.status}</td>
                        <td>
                            <div className='flex'>
                                <BiEdit onClick={()=>toggleEditModal(transaction.transactionId)}/>
                                <RiDeleteBin5Line onClick={()=> toggleDeleteModal(transaction.transactionId)}/>
                            </div>
                            
                        </td>
                  </tr>
                )
            })
        }
      
  </tbody>
</table>
    </div>
  )
}
