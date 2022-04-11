import React, {useState, useContext} from 'react'
import {TransactionsContext} from '../../providers/transactions/transactions.provider';  
import {ImCross} from 'react-icons/im'

import DeleteModal from '../../components/delete-modal/delete-modal.component';
import EditModal from '../../components/edit-modal/edit-modal.component';
import TransactionsTable from '../../components/transactions-table/transactions-table.component'

export default function Dashboard() {
    const [searchText, setSearchText] = useState("");
    const {toggleDeleteModal, toggleEditModal, showEditModal, showDeleteModal, currentTransaction} = useContext(TransactionsContext);

  return (
    <div>
        {
            showEditModal && <EditModal
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
            <form className='p-5 flex flex-row'>
                <label className='text-lg font-bold block relative mx-2'>
                    <span>Transaction</span>
                </label>
                    <input type="text"
                    onChange={(event)=> setSearchText(event.target.value)}
                    value={searchText}
                    placeholder='customer segment'
                     className='p-1 text-lg font-medium border-b-2 border-black'>
                    </input>
                    <div className='bg-white pt-2 border-b-2 border-black'>
                        <button type='button' onClick={()=> setSearchText("")}><ImCross /></button>
                    
                    </div>
            </form>
        </div>
        <div className='p-6'>
            <div className='border-b-2 border-black'>
                <span className=' font-bold'>Country of interest</span>
            </div>
            <span>Kenya</span>

            <div className='border-b-2 border-black'>
                <span className=' font-bold'>Edit transactions</span>
            </div>
            <span>Edit the transactions below to match the right information.</span>
        </div>
        <TransactionsTable
        toggleEditModal={toggleEditModal}
        toggleDeleteModal={toggleDeleteModal}      
        />
    </div>
  )
}
