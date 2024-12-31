import {RESET_SUBSCRIPTION} from '../actions/subsActions';

const initialState = {
  subscription: null,
};

const subscriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SUBSCRIPTION':
      return {
        ...state,
        subscription: action.payload,
      };
    case 'UPDATE_SUBSCRIPTION':
      return {
        ...state,
        subscription: action.payload,
      };

    case RESET_SUBSCRIPTION:
      return initialState;

    default:
      return state;
  }
};

export default subscriptionReducer;
