export const FETCH_RECEIPTS = 'FETCH_RECEIPTS';
export const ADD_RECEIPT = 'ADD_RECEIPT';
export const REMOVE_RECEIPT = 'REMOVE_RECEIPT';
export const RESET_RECEIPTS = 'RESET_RECEIPTS';
export const UPDATE_RECEIPT = 'UPDATE_RECEIPT';

export const fetchReceipts = receipts => ({
  type: FETCH_RECEIPTS,
  payload: receipts,
});

export const addReceipt = receipt => ({
  type: ADD_RECEIPT,
  payload: receipt,
});

export const removeReceipt = receiptId => ({
  type: REMOVE_RECEIPT,
  payload: receiptId,
});

export const resetReceipts = () => ({
  type: RESET_RECEIPTS,
});

export const updateReceipt = updatedReceipt => ({
  type: UPDATE_RECEIPT,
  payload: updatedReceipt,
});
