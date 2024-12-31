import {RESET_CATEGORIES, UPDATE_CATEGORY} from '../actions/categoryActions';

const initialState = {
  categories: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };

    case UPDATE_CATEGORY:
      const updatedCategories = state.categories.map(category =>
        category._id === action.payload._id ? action.payload : category,
      );
      return {
        ...state,
        categories: updatedCategories,
      };
    case 'REMOVE_CATEGORY':
      return {
        ...state,
        categories: state.categories.filter(
          category => category.id !== action.payload,
        ),
      };

    case RESET_CATEGORIES:
      return initialState;

    default:
      return state;
  }
};

export default categoryReducer;
