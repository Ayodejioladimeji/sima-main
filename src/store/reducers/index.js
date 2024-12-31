import {combineReducers} from 'redux';
import authReducer from './authReducer';
import categoryReducer from './categoryReducer';
import receiptReducer from './receiptReducer';
import subscriptionReducer from './subsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  cats: categoryReducer,
  receipts: receiptReducer,
  subs: subscriptionReducer,
});

export default rootReducer;
