import React, {createContext, useState} from 'react'

import {removeItemFromTransactions,
     editTransactionValues, 
     toggleTransactionAmount} from "./transactions.utils"

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

export const TransactionsContext = createContext({
    transactionItems : {}, 
    removeTransaction: ()=>{},
    editTransaction: () => {},
    toggleAmount: () => {}
})

export default function TransactionsProvider({children}) {
    const [transactions, setTransactions] = useState(INITIAL_DATA)
    const removeTransaction = transactionToRemoveId => {
       setTransactions( removeItemFromTransactions(transactions, transactionToRemoveId) );
    }
    const editTransaction = (transactionToEditId, updatedTransaction) =>{
        setTransactions( editTransactionValues(transactions, transactionToEditId, updatedTransaction ));
    }
    const toggleAmount =(transactionId) =>{
        setTransactions( toggleTransactionAmount(transactions, transactionId));
    }
  return <TransactionsContext.Provider value={{transactions, removeTransaction, editTransaction, toggleAmount}}>
      {children}
  </TransactionsContext.Provider>
}
