import React, {createContext, useState} from 'react'

import {removeItemFromTransactions,
     editTransactionValues, 
     toggleTransactionAmount} from "./transactions.utils"

const INITIAL_DATA = {
    "1480636587": {
        valueDate:"2022-01-13", 
        transactionId:"1480636587",
        movementType:"Collection", 
        amount:1400,
        status: "Active", 
        showAmount: false},
       "28032199311": {
            valueDate:"2022-03-23", 
            transactionId:"28032199311",
            movementType:"Money Transfer", 
            amount:2200,
            status: "Error", 
            showAmount: false},
            "321324121141": {
                valueDate:"2022-04-12", 
                transactionId:"321324121141",
                movementType:"Airtime", 
                amount:70,
                status: "Active", 
                showAmount: false}
    }

export const TransactionsContext = createContext({
    transactionItems : {}, 
    removeTransaction: ()=>{},
    editTransaction: () => {},
    toggleAmount: () => {},
    toggleEditModal:() => {},
    toggleDeleteModal: () =>{},
    showEditModal: false,
    showDeleteModal: false,
    currentTransaction: null
})

export default function TransactionsProvider({children}) {
    const [transactions, setTransactions] = useState(INITIAL_DATA)
    const [showEditModal, setShowEditModal ]= useState(false);
    const [showDeleteModal, setShowDeleteModal ]= useState(false);
    const [currentTransaction, setCurrentTransaction] = useState(null);

    const removeTransaction = transactionToRemoveId => {
       setTransactions( removeItemFromTransactions(transactions, transactionToRemoveId) );
    }
    const editTransaction = (transactionToEditId, updatedTransaction) =>{
        setTransactions( editTransactionValues(transactions, transactionToEditId, updatedTransaction ));
    }
    const toggleAmount =(transactionId) =>{
        setTransactions( toggleTransactionAmount(transactions, transactionId));
    }

    const toggleEditModal = (transactionId) =>{
        setCurrentTransaction(transactions[transactionId])
        setShowEditModal(!showEditModal)
    } 

    const toggleDeleteModal = (transactionId) =>{
        setCurrentTransaction(transactions[transactionId])
        setShowDeleteModal(!showDeleteModal)
    } 
  return <TransactionsContext.Provider value={{transactions, 
  removeTransaction, editTransaction,
   toggleAmount, 
   toggleEditModal,
    toggleDeleteModal,
    showEditModal,
    showDeleteModal,
    currentTransaction}}>
      {children}
  </TransactionsContext.Provider>
}
