export const removeItemFromTransactions = (allTransactions, transactionToRemoveId) =>{
    const transactionExists = allTransactions[transactionToRemoveId];
    if(!transactionExists) return;
    console.log('deleting :'+ transactionToRemoveId);
    const restOfTransactions= {...allTransactions};
    delete restOfTransactions[transactionToRemoveId];

    
    return restOfTransactions;
}

export const editTransactionValues = (allTransactions, transactionToEditId, updatedTransaction) =>{
    let currentTransaction = allTransactions[transactionToEditId];
    if(!currentTransaction) return;
    console.log('editing: '+ transactionToEditId)
    allTransactions[transactionToEditId] = updatedTransaction;
    return {
        ...allTransactions
    }
}

export const toggleTransactionAmount = (allTransactions, transactionId) => {
    let currentTransaction = allTransactions[transactionId];
    if(!currentTransaction) return;

    console.log("toggling: "+ transactionId)
    currentTransaction['showAmount']=  !currentTransaction['showAmount'];
    return {
        ...allTransactions
    };
}