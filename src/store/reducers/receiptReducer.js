import {RESET_RECEIPTS, UPDATE_RECEIPT} from '../actions/receiptActoins';

const initialState = {
  receipts: null,
};

const receiptReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RECEIPTS':
      return {
        ...state,
        receipts: action.payload,
      };
    case 'ADD_RECEIPT':
      return {
        ...state,
        receipts: [...state.receipts, action.payload]?.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        ),
      };
    case 'REMOVE_RECEIPT':
      const filteredReceipts = state.receipts.filter(
        receipt => receipt._id !== action.payload,
      );
      return {
        ...state,
        receipts: filteredReceipts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        ),
      };

    case 'UPDATE_RECEIPT':
      const updatedReceipts = state.receipts.map(receipt =>
        receipt._id === action.payload._id ? action.payload : receipt,
      );
      return {
        ...state,
        receipts: updatedReceipts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        ),
      };

    case RESET_RECEIPTS:
      return initialState;

    default:
      return state;
  }
};

export default receiptReducer;
