import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  subscription: null,
};

const SubscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    fetchSubscription: (state, action) => {
      state.subscription = action.payload;
    },
    updateSubscription: (state, action) => {
      state.subscription = action.payload;
    },
    resetSubscription: () => initialState,
  },
});

export const {fetchSubscription, updateSubscription, resetSubscription} =
  SubscriptionSlice.actions;

export default SubscriptionSlice.reducer;
