import {combineReducers, configureStore} from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import AuthSlice from './reducers/AuthSlice';
import CategorySlice from './reducers/CategorySlice';
import ReceiptSlice from './reducers/ReceiptSlice';
import SubscriptionSlice from './reducers/SubscriptionSlice';

const reducers = combineReducers({
  auth: AuthSlice,
  cats: CategorySlice,
  receipts: ReceiptSlice,
  subs: SubscriptionSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'cats', 'receipts', 'subs'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

const persistor = persistStore(store);
export {store, persistor};
