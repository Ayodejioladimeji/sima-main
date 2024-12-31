import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  receipts: null,
};

const ReceiptSlice = createSlice({
  name: 'receipt',
  initialState,
  reducers: {
    fetchReceipts: (state, action) => {
      state.receipts = action.payload;
    },
    addReceipt: (state, action) => {
      state.receipts = [...state.receipts, action.payload].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );
    },
    removeReceipt: (state, action) => {
      state.receipts = state.receipts
        .filter(receipt => receipt._id !== action.payload)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },
    updateReceipt: (state, action) => {
      state.receipts = state.receipts
        .map(receipt =>
          receipt._id === action.payload._id ? action.payload : receipt,
        )
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },
    resetReceipts: () => initialState,
  },
});

export const {
  fetchReceipts,
  addReceipt,
  removeReceipt,
  updateReceipt,
  resetReceipts,
} = ReceiptSlice.actions;

export default ReceiptSlice.reducer;
