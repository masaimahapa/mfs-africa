import React, {useContext, useState, useEffect} from 'react'

import { TransactionsContext } from '../../providers/transactions/transactions.provider';

  export default function DeleteModal({ toggleDeleteModal, transactionId}) {
      const {removeTransaction} = useContext(TransactionsContext);

    return (
      <div className='fixed z-10 inset-0  bg-slate-900 opacity-90 pt-10 ' role="dialog" aria-modal="true">
          <div className='justify-center text-center block bg-white max-w-lg  mx-auto'>
              <div className=' block'>
                  <h4 className=' font-bold text-lg '>Delete Row?</h4>
              </div>
              <div className='flex-row'>
                  <p>This action cannot be undone</p>
                  <p>Are you sure you want to continue?</p>
              </div>
              <div className='modal-footer'>
                  <button className='bg-slate-400 m-2 rounded shadow-lg p-1' onClick={toggleDeleteModal}>Cancel</button>
                  <button className=' bg-red-500 m-2 rounded shadow-lg text-white p-1' onClick={()=>{
                      removeTransaction(transactionId);
                      toggleDeleteModal();
                  }
                      }>Delete row</button>
              </div>
          </div>
      </div>
    )
  }
  