import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  categories: null,
};

const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategories: (state, action) => {
      state.categories = action.payload;
    },
    addCategory: (state, action) => {
      state.categories = [...state.categories, action.payload];
    },
    updateCategory: (state, action) => {
      state.categories = state.categories.map(category =>
        category._id === action.payload._id ? action.payload : category,
      );
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter(
        category => category.id !== action.payload,
      );
    },
    deleteCategory: (state, action) => {
      state.categories = state.categories.filter(
        category => category._id !== action.payload,
      );
    },
    resetCategories: () => initialState,
  },
});

export const {
  fetchCategories,
  addCategory,
  updateCategory,
  removeCategory,
  deleteCategory,
  resetCategories,
} = CategorySlice.actions;

export default CategorySlice.reducer;
