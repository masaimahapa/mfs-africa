import React, {useState} from 'react'
import {ImCross} from 'react-icons/im'

import DeleteModal from '../../components/delete-modal/delete-modal.component';

import EditModal from '../../components/edit-modal/edit-modal.component';
import TransactionsTable from '../../components/transactions-table/transactions-table.component'

export default function Dashboard() {

    const INITIAL_DATA = {
        "1480636587": {
            valueDate:"2022-01-13", 
            transactionId:"1480636587",
            movementType:"Money Transfer", 
            amount:1400,
            status: "Active", 
            showAmount: false},
           "28032199311": {
                valueDate:"2022-03-23", 
                transactionId:"28032199311",
                movementType:"Money Transfer", 
                amount:2200,
                status: "Error", 
                showAmount: false}
        }

    const [transactions, setTransactions] = useState(INITIAL_DATA);
    const [showEdit, setShowEdit] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [currentTransaction, setcurrentTransaction] = useState();

    const toggleEditModal = (transactionId) =>{
        setcurrentTransaction(transactions[transactionId])
        setShowEdit(!showEdit)
    } 

    const toggleDeleteModal = (transactionId) =>{
        setcurrentTransaction(transactions[transactionId])
        setShowDeleteModal(!showDeleteModal)
    } 



  return (
    <div>
        {
            showEdit && <EditModal showEdit={showEdit} 
            toggleEditModal={toggleEditModal}
            transaction={currentTransaction}/>
        }

        {
            showDeleteModal && <DeleteModal
                toggleDeleteModal={toggleDeleteModal}
                transactionId={currentTransaction['transactionId']}
             />
        }
        
        <div className='w-full bg-slate-100 h-20'>
            <form className='py-5 flex'>
                <label className='text-lg font-bold block relative'>
                    <span>Transaction</span>
                </label>
                
                    
                    <input type="text" placeholder='customer segment'
                     className='p-1 text-lg font-medium border-b-2 border-black'>
                    </input>
                    <div className='bg-white'>
                    <ImCross className='absolute mt-2'/>
                    </div>
            </form>
        </div>
        <div className='m-2'>
            <div className='border-b-2 border-black'>
                <span className=' font-bold'>Country of interest</span>
            </div>
            <span>Kenya</span>

            <div className='border-b-2 border-black'>
                <span className=' font-bold'>Edit transactions</span>
            </div>
            <span>Edit the transactions below to match the right information.</span>
        </div>

        <TransactionsTable transactions={transactions} 
        toggleEditModal={toggleEditModal}
        toggleDeleteModal={toggleDeleteModal}
        
        />

    </div>
  )
}
